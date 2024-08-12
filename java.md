# MongoDB Java Developer Path

## Indexing

- [Connecting to MongoDB in Java](#connecting-to-mongodb-in-java)
- [CRUD Operations](#crud-operations)


# CONNECTING TO MONGODB IN JAVA

## Using MongoDB Java Client Libraries

To connect to MongoDB in Java using the MongoDB Java client libraries, follow these steps:

### 1. Add MongoDB Java Driver Dependency

Add the MongoDB Java driver to your project. If you are using Maven, include the following dependency in your `pom.xml` file:

```xml
<dependency>
    <groupId>org.mongodb</groupId>
    <artifactId>mongodb-driver-sync</artifactId>
    <version>4.9.0</version> <!-- Check for the latest version -->
</dependency>
```

If you are using Gradle, add this to your `build.gradle` file:

```groovy
implementation 'org.mongodb:mongodb-driver-sync:4.9.0' // Check for the latest version
```

### 2. Establish a Connection

To connect to a MongoDB instance, you need to create a `MongoClient` object. Here's an example of how to do this:

```java
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

public class MongoDBConnection {

    public static void main(String[] args) {
        // Replace the connection string with your MongoDB deployment's connection string.
        String connectionString = "mongodb+srv://skprajapati3214:Sachin0715@backend-cluster.qfpxr0l.mongodb.net/?retryWrites=true&w=majority"; // Example for local MongoDB

        // Create a new client and connect to the server
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            // Access a database
            MongoDatabase database = mongoClient.getDatabase("mydatabase");

            // Print database name
            System.out.println("Connected to database: " + database.getName());
        }
    }
}
```
Using a single `MongoClient` instance for your entire application is a good practice, as it helps to reduce overhead and manage connections efficiently. Here’s how you can implement a singleton pattern for `MongoClient` in Java:

### Singleton Pattern for MongoClient

#### 1. Create a Singleton Class for MongoClient

```java
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

public class MongoClientSingleton {

    private static MongoClient mongoClient;

    private MongoClientSingleton() {
        // Private constructor to prevent instantiation
    }

    public static MongoClient getMongoClient() {
        if (mongoClient == null) {
            synchronized (MongoClientSingleton.class) {
                if (mongoClient == null) {
                    // Initialize the MongoClient instance
                    String connectionString = "mongodb://localhost:27017"; // Replace with your connection string
                    mongoClient = MongoClients.create(connectionString);
                }
            }
        }
        return mongoClient;
    }
}
```

#### 2. Use the Singleton Instance in Your Application

Whenever you need to access the MongoDB database, you can use the `getMongoClient` method to get the `MongoClient` instance. Here’s how you can use it:

```java
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class MongoDBOperations {

    public static void main(String[] args) {
        // Get the single instance of MongoClient
        MongoClient mongoClient = MongoClientSingleton.getMongoClient();

        // Access the database
        MongoDatabase database = mongoClient.getDatabase("mydatabase");

        // Access a collection
        MongoCollection<Document> collection = database.getCollection("mycollection");

        // Perform operations
        // Example: Insert a document
        Document doc = new Document("name", "John Doe")
                        .append("age", 30)
                        .append("city", "New York");
        collection.insertOne(doc);

        // Example: Find a document
        Document foundDoc = collection.find().first();
        System.out.println("Found document: " + foundDoc.toJson());
    }
}
```

### Key Points

1. **Thread Safety**: The singleton pattern ensures that the `MongoClient` instance is thread-safe and that only one instance exists throughout the application. The `synchronized` block ensures that only one thread can initialize the instance at a time.

2. **Resource Management**: Using a single `MongoClient` instance helps manage resources efficiently, as creating multiple instances can lead to increased resource usage and potential connection issues.

3. **Closing the MongoClient**: If you are running a standalone application, ensure you close the `MongoClient` instance when the application terminates. You can add a shutdown hook to close it gracefully:

    ```java
    Runtime.getRuntime().addShutdownHook(new Thread(() -> {
        if (mongoClient != null) {
            mongoClient.close();
        }
    }));
    ```

By following this approach, you can manage your MongoDB connections effectively and ensure that your application performs optimally.

# CRUD OPERATIONS

### 1. INSERT AND FIND

#### Insert One Document
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Sales");

Document doc = new Document("item", "abc")
                .append("price", 10)
                .append("quantity", 2)
                .append("date", new java.util.Date("2014-03-01T08:00:00Z"));

InsertOneResult result=collection.insertOne(doc);
System.out.println("Inserted ID: " + result.getInsertedId());
```

#### Insert Multiple Documents
```java
import java.util.Arrays;

MongoCollection<Document> collection = database.getCollection("Sales");

Document doc1 = new Document("item", "jkl")
                .append("price", 20)
                .append("quantity", 1)
                .append("date", new java.util.Date("2014-03-01T09:00:00Z"));

Document doc2 = new Document("item", "xyz")
                .append("price", 5)
                .append("quantity", 10)
                .append("date", new java.util.Date("2014-03-15T09:00:00Z"));

InsertManyResult result=collection.insertMany(Arrays.asList(doc1, doc2));
result.getInsertedIds().forEach((x,y)-> System.out.println(y.asObjectId()));
```

#### Find All Documents
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Sales");

for (Document doc : collection.find()) {
    System.out.println(doc.toJson());
}
```

#### Find One Document
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Sales");

Document doc = collection.find().first();
System.out.println(doc.toJson());
```

#### Find with Query
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Sales");

for (Document doc : collection.find(new Document("item", "xyz"))) {
    System.out.println(doc.toJson());
}
```

#### Find with $in Operator
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Sales");

for (Document doc : collection.find(new Document("price", new Document("$in", Arrays.asList(10, 5, 20))))) {
    System.out.println(doc.toJson());
}
```

#### Find with Comparison Operators
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Movies");

for (Document doc : collection.find(new Document("imdb.rating", new Document("$gt", 7)))) {
    System.out.println(doc.toJson());
}

for (Document doc : collection.find(new Document("imdb.rating", new Document("$gt", 7))
                                            .append("tomatoes.viewer.rating", new Document("$gt", 4)))) {
    System.out.println(doc.toJson());
}
```

#### Find with $elemMatch
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Movies");

for (Document doc : collection.find(new Document("cast", new Document("$elemMatch", new Document("$eq", "John Bowers"))))) {
    System.out.println(doc.toJson());
}
```

#### Find with Logical Operators
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Movies");

for (Document doc : collection.find(new Document("$and", Arrays.asList(
        new Document("imdb.rating", new Document("$gte", 6.9)),
        new Document("runtime", 65)
)))) {
    System.out.println(doc.toJson());
}

for (Document doc : collection.find(new Document("$or", Arrays.asList(
        new Document("runtime", 65),
        new Document("directors", new Document("$elemMatch", new Document("$eq", "Winsor McCay")))
)))) {
    System.out.println(doc.toJson());
}
```

### 2. REPLACE, UPDATE AND DELETE

#### Replace One Document
```java
import org.bson.Document;
import org.bson.types.ObjectId;

MongoCollection<Document> collection = database.getCollection("Sales");

Document replacement = new Document("item", "abc")
                        .append("price", 15)
                        .append("quantity", 5)
                        .append("date", new java.util.Date("2014-03-01T08:00:00Z"));

collection.replaceOne(new Document("_id", new ObjectId("6682e1a165332a71e20576f5")), replacement, new ReplaceOptions().upsert(true));
```

#### Update One Document
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Movies");

collection.updateOne(new Document("title", "The Matrix"), new Document("$set", new Document("title", "The Matrix Reloaded")));
```

#### Update with $push
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Movies");

collection.updateOne(new Document("title", "The Matrix Reloaded"), new Document("$push", new Document("genres", "Horror")));
```

#### Find and Modify
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Movies");

Document result = collection.findOneAndUpdate(new Document("title", "The Matrix Reloaded"),
                                             new Document("$inc", new Document("imdb.rating", 1)),
                                             new FindOneAndUpdateOptions().returnDocument(ReturnDocument.AFTER));
System.out.println(result.toJson());
```

#### Update Many Documents
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Movies");

collection.updateMany(new Document("year", 1999), new Document("$inc", new Document("imdb.rating", -1)));
```

#### Delete One Document
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Sales");

collection.deleteOne(new Document("price", 15));
```

#### Delete Many Documents
```java
import org.bson.Document;

MongoCollection<Document> collection = database.getCollection("Sales");

collection.deleteMany(new Document("price", 5));
```

### 3. MODIFYING QUERY RESULTS

#### Sorting and Limiting Results
```java
import com.mongodb.client.model.Sorts;
import com.mongodb.client.model.Projections;

MongoCollection<Document> collection = database.getCollection("Sales");

for (Document doc : collection.find().sort(Sorts.ascending("item")).limit(2)) {
    System.out.println(doc.toJson());
}

for (Document doc : collection.find(new Document("imdb.rating", new Document("$gte", 6)))
                              .projection(Projections.fields(Projections.excludeId(), Projections.include("imdb.rating")))
                              .sort(Sorts.descending("imdb.rating"))) {
    System.out.println(doc.toJson());
}
```

#### Returning Specific Data from a Query
```java
import com.mongodb.client.model.Projections;

MongoCollection<Document> collection = database.getCollection("Movies");

for (Document doc : collection.find().projection(Projections.fields(Projections.include("cast"), Projections.excludeId()))) {
    System.out.println(doc.toJson());
}

for (Document doc : collection.find().projection(Projections.fields(Projections.include("cast", "title"), Projections.excludeId()))) {
    System.out.println(doc.toJson());
}

for (Document doc : collection.find().projection(Projections.fields(Projections.exclude("cast", "title"), Projections.excludeId()))) {
    System.out.println(doc.toJson());
}
```

#### Counting Documents
```java
import com.mongodb.client.model.Filters;

MongoCollection<Document> collection = database.getCollection("Movies");

long count = collection.countDocuments();
System.out.println("Total Documents: " + count);

long countFiltered = collection.countDocuments(Filters.gte("imdb.rating", 8));
System.out.println("Filtered Documents: " + countFiltered);
```

This should give you a good overview of CRUD operations using the MongoDB Java Driver without repetitive connection code.


# MONGODB TRANSACTIONS
Here’s how you can use MongoDB transactions in Java, following the same principles as outlined in the JavaScript example. This includes starting a session, executing operations within a transaction, and handling commits or aborts.

### Example of Using Transactions in Java

```java
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;
import com.mongodb.client.ClientSession;
import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.model.Filters;

public class MongoDBTransactionExample {

    public static void main(String[] args) {
        String uri = "your_mongodb_connection_string";
        try (MongoClient client = MongoClients.create(uri)) {
            MongoDatabase database = client.getDatabase("exampleDB");
            MongoCollection<Document> usersCollection = database.getCollection("users");
            MongoCollection<Document> ordersCollection = database.getCollection("orders");

            ClientSession session = client.startSession();

            try {
                session.startTransaction();

                // Update user balance
                usersCollection.updateOne(
                    session,
                    Filters.eq("_id", new ObjectId("some_user_id")),
                    new Document("$inc", new Document("balance", -100))
                );

                // Insert an order
                ordersCollection.insertOne(
                    session,
                    new Document("userId", new ObjectId("some_user_id"))
                        .append("item", "item_name")
                        .append("price", 100)
                );

                // Commit transaction
                session.commitTransaction();
                System.out.println("Transaction committed.");
            } catch (Exception e) {
                // Abort transaction in case of an error
                session.abortTransaction();
                System.err.println("Transaction aborted due to an error: " + e.getMessage());
            } finally {
                session.endSession();
            }
        }
    }
}
```

### Key Steps in Using Transactions

1. **Start a Session:** Create a `ClientSession` object using `client.startSession()`.
2. **Start a Transaction:** Begin the transaction with `session.startTransaction()`.
3. **Perform Operations:** Execute the desired operations using the session.
4. **Commit or Abort:** Commit the transaction using `session.commitTransaction()` if everything is successful, or abort using `session.abortTransaction()` if an error occurs.
5. **End the Session:** Clean up by ending the session with `session.endSession()`.

### Key Points
- **Session Object:** Transactions are tied to sessions, so operations need to be performed with the session object.
- **Atomicity and Consistency:** The transaction ensures that all operations are completed successfully or none are applied, maintaining data integrity.
- **Error Handling:** Proper error handling ensures that transactions are rolled back if something goes wrong.

This Java example follows the same transaction principles as shown in the JavaScript code but uses the MongoDB Java driver for implementation.