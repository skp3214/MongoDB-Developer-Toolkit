# MongoDB Developer's Toolkit: CRUD Mastery with Node.js, Java, Python
## Indexing

- [MongoDB Developer's Toolkit: CRUD Mastery with Node.js, Java, Python](#mongodb-developers-toolkit-crud-mastery-with-nodejs-java-python)
  - [Indexing](#indexing)
- [MONGODB INTRODUCTION](#mongodb-introduction)
  - [Introduction](#introduction)
  - [What is MongoDB](#what-is-mongodb)
  - [Key Features of MongoDB:](#key-features-of-mongodb)
- [GETTING STARTED WITH MONGODB ATLAS](#getting-started-with-mongodb-atlas)
  - [Steps to Get Started:](#steps-to-get-started)
- [MONGODB AND THE DOCUMENT MODEL](#mongodb-and-the-document-model)
  - [Overview](#overview)
  - [Databases, Collections, and Documents](#databases-collections-and-documents)
    - [Key Features](#key-features)
    - [Summary](#summary)
- [CONNECTING TO A MONGODB DATABASE](#connecting-to-a-mongodb-database)
  - [MongoDB Connection Strings: A Comprehensive Guide](#mongodb-connection-strings-a-comprehensive-guide)
    - [Example of a MongoDB Connection String](#example-of-a-mongodb-connection-string)
    - [Breakdown of the Example](#breakdown-of-the-example)
    - [Example in Context](#example-in-context)
    - [Components of a MongoDB Connection String](#components-of-a-mongodb-connection-string)
  - [CONNECTING TO A MONGODB DATABASE](#connecting-to-a-mongodb-database-1)
    - [Introduction](#introduction-1)
    - [1. Connecting to a MongoDB Atlas Cluster with the Shell](#1-connecting-to-a-mongodb-atlas-cluster-with-the-shell)
      - [Steps:](#steps)
  - [2. Connecting to a MongoDB Atlas Cluster with Compass](#2-connecting-to-a-mongodb-atlas-cluster-with-compass)
    - [Steps:](#steps-1)
  - [3. Connecting from Applications](#3-connecting-from-applications)
    - [Node.js (Using the MongoDB Node.js Driver)](#nodejs-using-the-mongodb-nodejs-driver)
    - [Python (Using the PyMongo Driver)](#python-using-the-pymongo-driver)
    - [Java (Using the MongoDB Java Driver)](#java-using-the-mongodb-java-driver)
- [CRUD OPERATIONS](#crud-operations)
  - [1. INSERT AND FIND](#1-insert-and-find)
  - [2. REPLACE, UPDATE AND DELETE](#2-replace-update-and-delete)
  - [3. MODIFYING QUERY RESULTS](#3-modifying-query-results)
- [MONGODB AGGREGATION](#mongodb-aggregation)
    - [1. Aggregation Pipeline](#1-aggregation-pipeline)
    - [2. Key Stages](#2-key-stages)
  - [Using `$match` and `$group` Stages in MongoDB Aggregation Pipeline](#using-match-and-group-stages-in-mongodb-aggregation-pipeline)
    - [Example 1: $match](#example-1-match)
    - [Example 2: $group](#example-2-group)
    - [Combined Example: $match and $group](#combined-example-match-and-group)
    - [Breakdown of the Stages](#breakdown-of-the-stages)
  - [Using `$sort` and `$limit` Stages in a MongoDB Aggregation Pipeline](#using-sort-and-limit-stages-in-a-mongodb-aggregation-pipeline)
    - [Example: $sort](#example-sort)
    - [Example: $limit](#example-limit)
    - [Combined Example: $sort and $limit](#combined-example-sort-and-limit)
    - [Breakdown of the Stages](#breakdown-of-the-stages-1)
  - [Using `$project`, `$count` and `$set` Stages in a MongoDB Aggregation Pipeline](#using-project-count-and-set-stages-in-a-mongodb-aggregation-pipeline)
    - [Example: $project](#example-project)
    - [Example: $count](#example-count)
    - [Example: $set](#example-set)
    - [Combined Example: $match, $group, $project, and $set](#combined-example-match-group-project-and-set)
    - [Breakdown of the Stages](#breakdown-of-the-stages-2)
  - [Using `$out` Stage in a MongoDB Aggregation Pipeline](#using-out-stage-in-a-mongodb-aggregation-pipeline)
    - [Breakdown of the Stages with $out](#breakdown-of-the-stages-with-out)

#   MONGODB INTRODUCTION

## Introduction

In today's digital age, where data reigns supreme, the need for robust, scalable, and flexible database solutions is paramount. `MongoDB`, a leading `NoSQL database`, has emerged as a popular choice among developers and enterprises alike. In this guide, we'll explore the fundamentals of MongoDB and show you how to get started with MongoDB Atlas, the Developer Data Platform, to kickstart your database journey.

## What is MongoDB

`MongoDB` is a document-oriented NoSQL database that provides high performance, scalability, and flexibility for managing modern, unstructured data. Unlike traditional relational databases, MongoDB stores data in flexible, `JSON-like documents`, making it ideal for handling diverse and evolving data structures.

## Key Features of MongoDB:

- **Flexible Schema**: Store heterogeneous data without predefined schemas, enabling agile development and easy data modeling.
- **High Scalability**: Distributed architecture allows for seamless horizontal scaling across multiple nodes.
- **Rich Query Language**: Powerful query language supports rich queries, indexing, and aggregation pipelines.
- **Document-Based Storage**: Stores data in BSON (Binary JSON) format for efficient storage and retrieval of complex data structures.
- **Replication and Sharding**: Supports automatic replication and sharding for fault tolerance, data redundancy, and horizontal scaling.

**[Back To Top ⬆ ](#indexing)**

# GETTING STARTED WITH MONGODB ATLAS 

MongoDB Atlas is a fully managed cloud database service provided by MongoDB, designed to simplify database deployment, management, and scaling. With MongoDB Atlas, developers can focus on building applications without worrying about infrastructure management.

## Steps to Get Started:

1. **Sign Up for MongoDB Atlas**: 
   - Go to the [MongoDB website](https://www.mongodb.com/cloud/atlas).
   - Sign up for a free account. MongoDB offers a free tier with generous usage limits, making it easy for developers to get started without any upfront costs.

2. **Create a Cluster**:
   - After signing up, log in to the MongoDB Atlas dashboard.
   - Click on "Build a New Cluster" and follow the prompts to configure your cluster. Choose your cloud provider, region, and cluster tier based on your requirements.

3. **Connect to Your Cluster**:
   - Once your cluster is created, MongoDB Atlas provides a connection string.
   - Use this connection string to connect your application to the database. You can connect using:
     - **MongoDB Shell**: For command-line interactions.
     - **Drivers**: For various programming languages (e.g., Node.js, Python, Java).
     - **MongoDB Compass**: A graphical user interface for managing your database.

4. **Manage Your Cluster**:
   - MongoDB Atlas offers tools for monitoring, backups, and security.
   - Monitor your cluster's performance, set up automated backups, and configure access controls to secure your data.

5. **Scale Your Cluster**:
   - As your application grows, you can easily scale your cluster.
   - Upgrade instance sizes, add additional shards for horizontal scaling, or enable auto-scaling to automatically adjust resources based on demand.

---
**[Back To Top ⬆ ](#indexing)**
# MONGODB AND THE DOCUMENT MODEL

## Overview

MongoDB is a general-purpose database used for a variety of use cases and is part of the Atlas developer data platform. The MongoDB document model organizes data into *documents*, *collections*, and *databases*. This readme provides an overview of these concepts and how to use MongoDB and Atlas Data Explorer.

## Databases, Collections, and Documents

- ### Database
      A container for collections, similar to a schema in relational databases

- ### Collection
      A group of MongoDB documents, analogous to a table in relational databases.

- ### Document
      A record in a collection, stored in BSON format.

  - #### The MongoDB Document Model

  - #### BSON
    Binary JSON format used to store MongoDB documents, which can contain nested data structures.

  - #### Document Structure
    The values in a document can be any data type, including strings, objects, arrays, booleans, nulls, dates, ObjectIds, and more. Here's the syntax for a MongoDB document, followed by an example:

  - #### Syntax
    ```json
    {
    "key": value,
    "key": value,
    "key": value
    }
   
   - #### Example
     ```json
     {
      "_id": ObjectId("507f1f77bcf86cd799439011"),
      "name": "John Doe",
      "age": 30,
      "email": "john.doe@example.com",
      "address": {
                  "street": "123 Main St",
                  "city": "Anytown",
                  "zip": "12345"
               },
      "hobbies": ["reading", "travelling", "coding"]
     }
  - ### Field
        A key-value pair within a document.

### Key Features
- **Data Organization:** Data is organized into documents, collections, and databases.
- **BSON:** Documents are stored in BSON, supporting a wide range of data types including JSON data types, dates, numbers, and ObjectIds.
- **_id Field:** Every document requires an _id field, acting as a primary key or unique identifier. MongoDB generates one automatically if not provided.
- **Flexible Schema:** Documents with different structures can be stored in the same collection.

### Summary
- A **Database** contains multiple **Collections**.
- Each **Collection** contains multiple **Documents**.
- Each **Document** contains multiple **Fields**.
  
**[Back To Top ⬆ ](#indexing)**

# CONNECTING TO A MONGODB DATABASE


## MongoDB Connection Strings: A Comprehensive Guide

MongoDB's connection strings encapsulate all the necessary information required to connect to a MongoDB database instance. Understanding these connection strings is crucial for establishing a successful connection to your MongoDB server. Below is a detailed breakdown of the components of a MongoDB connection string:

### Example of a MongoDB Connection String

Here is an example of a MongoDB connection string with all components included:

```
mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
```

### Breakdown of the Example

- **Protocol**: `mongodb+srv://`
- **Username**: `<username>`
- **Password**: `<password>`
- **Hostname**: `<cluster-url>`
- **Database Name**: `<dbname>`
- **Options**: `retryWrites=true&w=majority`

### Example in Context

For a MongoDB cluster hosted on MongoDB Atlas, the connection string might look like this:

```
mongodb+srv://admin:admin123@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
```

In this example:
- The protocol is `mongodb+srv://`.
- The username is `admin`.
- The password is `admin123`.
- The cluster URL is `cluster0.mongodb.net`.
- The database name is `myDatabase`.
- The options include `retryWrites=true` and `w=majority`.

### Components of a MongoDB Connection String

1. **Protocol**
   - The protocol specifies the communication protocol used to connect to the MongoDB server.
   - Common protocols include:
     - `mongodb://` for unencrypted connections.
     - `mongodb+srv://` for connections using DNS seed list discovery.

2. **Hostname and Port ( CLUSTER URL)**
   - The hostname and port components denote the address and port number of the MongoDB server.

3. **Authentication Credentials**
   - Authentication credentials include the `username` and `password` required to authenticate against the MongoDB server.
   - These credentials are essential for securing access to your database.
   - Example: `mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority`

4. **Database Name**
   - The database name specifies the name of the database to which you want to connect.
   - If the database does not exist, MongoDB will create it upon connection.

5. **Options**
   - Additional options can be included in the connection string to customize the connection.
   - Common options include:
     - `retryWrites=true` to enable automatic retries of certain write operations.
     - `w=majority` to set the write concern to "majority".

**[Back To Top ⬆ ](#indexing)**
## CONNECTING TO A MONGODB DATABASE

### Introduction
MongoDB Atlas, a cloud-based database service, offers developers a robust platform for managing their data. Establishing a connection to your MongoDB Atlas cluster is a crucial first step. This guide explores two methods for connecting to a MongoDB Atlas cluster: using the `MongoDB shell` and `MongoDB Compass`. Additionally, it covers connecting from `Applications`.

### 1. Connecting to a MongoDB Atlas Cluster with the Shell

#### Steps:
1. **Locate Connection String**: 
   - Navigate to your MongoDB Atlas dashboard.
   - Select your cluster and click "Connect."
   - Choose "Connect Your Application" and select "Mongo Shell."
   - Copy the connection string provided.
2. **Open Terminal**: 
   - Launch your terminal or command prompt.
   - Paste the copied connection string, replacing `<password>` with your MongoDB Atlas password.
3. **Connect to Cluster**: 
   - Execute the command to connect to your MongoDB Atlas cluster:
     ```bash
     mongo "mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority"
     ```
   - Enter your MongoDB Atlas username and password when prompted.
4. **Authentication**: 
   - Once authenticated, you are connected to your MongoDB Atlas cluster and can execute MongoDB commands and queries.

## 2. Connecting to a MongoDB Atlas Cluster with Compass

### Steps:
1. **Download and Install Compass**:
   - Download MongoDB Compass from the MongoDB website.
   - Follow the installation instructions.
2. **Locate Connection String**:
   - In the MongoDB Atlas dashboard, select your cluster and click "Connect."
   - Choose "Connect Your Application" and select "MongoDB Compass."
   - Copy the connection string provided.
3. **Launch Compass**:
   - Open MongoDB Compass and click on the "New Connection" button.
4. **Paste Connection String**:
   - In the connection dialog, paste the copied connection string.
5. **Connect**:
   - Click "Connect" and enter your MongoDB Atlas username and password if prompted.

## 3. Connecting from Applications

MongoDB Atlas supports various programming languages and frameworks. Below are examples for Node.js, Python, and Java:

### Node.js (Using the MongoDB Node.js Driver)
```javascript
const { MongoClient } = require('mongodb');

// MongoDB connection string
const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
async function connectToAtlas() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    // Perform database operations here
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB Atlas');
  }
}

connectToAtlas();
```

### Python (Using the PyMongo Driver)
```python
from pymongo import MongoClient

# MongoDB connection string
uri = "mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority"

# Connect to MongoDB Atlas
def connect_to_atlas():
    client = MongoClient(uri)
    try:
        print("Connected to MongoDB Atlas")
        # Perform database operations here
    except Exception as e:
        print("Error connecting to MongoDB Atlas:", e)
    finally:
        client.close()
        print("Disconnected from MongoDB Atlas")

connect_to_atlas()
```

### Java (Using the MongoDB Java Driver)
```java
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.MongoClientSettings;
import com.mongodb.ConnectionString;

public class Main {
    public static void main(String[] args) {
        // MongoDB's connection string
        String uri = "mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority";

        // Connect to MongoDB Atlas
        try (MongoClient client = MongoClients.create(new ConnectionString(uri))) {
            System.out.println("Connected to MongoDB Atlas");
            // Perform database operations here
        } catch (Exception e) {
            System.err.println("Error connecting to MongoDB Atlas: " + e);
        }
    }
}
```
---

**[Back To Top ⬆ ](#indexing)**

# CRUD OPERATIONS
## 1. INSERT AND FIND
  When you insert a document in a collection, it returns insertedId.
  - ## insertOne()
         db.<collection>.insertOne({<document>})
      *Example*

      ```js
      db.Sales.insertOne(
         { 
         'item': 'abc',   // key : value
         'price': 10, 
         'quantity': 2, 
         'date': new Date('2014-03-01T08:00:00Z') 
         }
      )
      ```

     ### *You can see the insertedId in the terminal output.*

      ![alt text](image.png)
  - ## insertMany()
    
        db.<collection>.insertMany([{<document>},{<document>},{<document>}])
      
      *Example*

      ```js
      db.Sales.insertMany(
      [
         { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
         { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
         { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
         { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
         { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
         { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
         { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
      ]
      );
      ```
      ### *You can see the insertedIds in the terminal output.*

      ![alt text](image-1.png)

  - ## find()
         db.<collection>.find()
      It returns all the documents in the collection

      *Example*
      ```js
      db.sales.find()
      ```
      ![alt text](image-2.png)

  - ## findOne()
        db.<collection>.findOne()
      It returns the first document in the collection.

      *Example*
      ```js
      db.sales.findOne()
      ```

      ![alt text](image-3.png)

  - ## find({query})
        db.<collection>.find({query})
      It returns the documents that match the query.

      *Example*
      ```js
      db.sales.find({item: 'xyz'})
      ```
      There is 2 documents with same query.

      ![alt text](image-4.png)

  - ## findOne({query})
        db.<collection>.findOne({query})
        
      It returns the first document that match the query.

      *Example*
      ```js
      db.sales.findOne({item: 'xyz'})
      ```
      ![alt text](image-5.png)

  - ## find({ $in operator })
        db.<collection>.find({<field>:{$in:[<value>,<value>,<value>]}})
        
      It returns the documents that match the value in the array.

      *Example*
      ```js
      db.sales.find({price:{$in:[10,5,20]}})
      ```
      ![alt text](image-6.png)

  - ## find({comparison operator})
    - **$gt** : stands for `greater than`.
    - **$lt** : stands for `less than`.
    - **$gte** : stands for `greater than or equal`.
    - **$lte** : stands for `less than or equal`.
    - **$ne** : stands for `not equal`.
  
          db.<collection>.find({<field>:{$(comparison operator):<value>}})
          

      *Example*
      ```js
      db.movies.find({"imdb.rating":{$gt:7}})
      ```
      ![alt text](image-7.png)

            db.<collection>.find({
            <field>:{$(comparison operator):<value>},
            <field:{$(comparison operator):<value>}
            })

      *Example*

      ```js
         db.movies.find({
         "imdb.rating":{$gt:7},
         "tomatoes.viewer.rating":{$gt:4},
         })
      ```

      ![alt text](image-8.png)

  - ## find({query in Array})
         db.<collection>.find({<field>:{
          $elemMatch:{$eq:<value>}
         }})
      It returns the documents that match the value in the array.

      *Example*
      ```js
      db.movies.find({cast:{
        $elemMatch:{$eq:"John Bowers"}
      }})
      ```
      ![alt text](image-9.png)

  - ## find({logical operator})
    * **$and**
    * **$or**
         
           db.<collection>.find({
            $(logical operator):[
              {<expression>},
              {<expression>},
            ]
           })

      *$and Example*
      ```js
      db.movies.find({
        $and:[
          {"imdb.rating":{$gte:6.9}},
          {runtime:65}
          ]
      })
      ```

      ![alt text](image-10.png)

      *$or Example*
      ```js
      db.movies.find(
        $or:[
          {runtime:65},
          {directors:{
            $elemMatch:{$eq:"Winsor McCay"}
          }}
        ]
      )
      ```
      ![alt text](image-11.png)

**[Back To Top ⬆ ](#indexing)**

## 2. REPLACE, UPDATE AND DELETE

  - ## replaceOne(filter , replacement)
  
    * **filter**: The filter is used to find the document to be replaced.   
    * **replacement**: The replacement document is used to replace the document found by the filter.
    * **options**: The options are used to specify the behavior of the replaceOne() method.
    * **Upsert Option**:
      When upsert is set to true, if no document matches the filter, MongoDB will insert the replacement document as a new document.
      If a document matches the filter, it will be replaced with the replacement document.
  
          db.<collection>.replaceOne(filter, replacement, options)

    *Example*

    ```js
    db.sales.replaceOne(
       {_id:new ObjectId("6682e1a165332a71e20576f5")},
       {
        "item": "abc",
        "price": 15,
        "quantity": 5,
        "date": {
          "$date": "2014-03-01T08:00:00Z"
          }
       }
       {
        upsert: true
       }
    )
    ```
    ![alt text](image-12.png)

  - ## updateOne(filter, update, options)
          db.<collection>.updateOne(filter, update, options)

      *Example*
      ```js
      db.movies.updateOne(
        {title:"The Matrix"},
        {$set:{title:"The Matrix Reloaded"}}
      )
      ```
      ![alt text](image-13.png)

      ```js
      db.movies.updateOne({
        {title:"The Matrix Reloaded"},
        {
          $push:{
            genres:"Horror"
          }
        }
      })
      ```
      ![alt text](image-14.png)

  - ## findAndModify(query,update,options)
        db.<collection>.findAndModify(query,update,options)

    *Example*

    ```js
    db.movies.findAndModify(
      {
        query:{title:"The Matrix Reloaded"},
        update:{
          $inc:{"imdb.rating":1}
        },
        new:true
      }
    )
    ```
    ![alt text](image-15.png)

    *Rating increased by 1.*

    ![alt text](image-16.png)

  - ## updateMany(filter,update)
         db.<collection>.updateMany(filter,update)

      *Example*
      ```js
      db.movies.updateMany(
        {year:1999},
        {
          $inc:{"imdb.rating":-1}
        }
      )
      ```
      ![alt text](image-17.png)

  - ## deleteOne(filter)
        db.<collection>.deleteOne(filter)
        
      *Example*
      ```js
      db.sales.deleteOne({price:15})
      ```
      ![alt text](image-18.png)

  - ## deleteMany(filter)
    It will delete all the document that matches the filter.

        db.<collection>.deleteMany(filter)

    *Example*
    ```js
    db.sales.deleteMany({price:5})
    ```
    ![alt text](image-19.png)

**[Back To Top ⬆ ](#indexing)**

## 3. MODIFYING QUERY RESULTS
  
  - ## Sorting and Limiting Query Result 
    - **limit(n)**
         
           db.<collection>.find().limit(n)
      *Example*
      ```js
      db.sales.find().limit(2)
      ```
      ![alt text](image-20.png)

    - **sort({field:n})**
       
       n=1 Ascending.
       n=-1 Descending.

             db.<collection>.find().sort({filed:n})

      *Example*
      ```js
      db.sales.find().sort({item:1})
      ```
      ![alt text](image-21.png)

      ```js
      db.movies.find({"imdb.rating":{
        $ge:6
      }},{"imdb.rating":-1}).sort({"imdb.rating":-1})
      ```
      ![alt text](image-22.png)

  - ## Returning Specific Data from a Query 
  
    - Getting single field only along with _id.
  
            db.<collection>.find().project({field:1})
    - - 1 mean include and 0 means exclude.
    
    *Example*
    ```js
    db.movies.find().projection({cast:1});
    ```
    ![alt text](image-23.png)

    - Getting more than 1 field along with _id.
  
             db.<collection>.find().projection({filed1:1,field2:1})

    *Example*
    ```js
    db.movies.find().projection({cast:1,title:1})
    ```
    ![alt text](image-24.png)

    - Excluding the desired filed.
   
      *Example*
      ```js
      db.movies.find().projection({cast:0,title:0})
      ```

      ![alt text](image-25.png)
    
  - ## Counting Documents in MongoDB Documents
    
    - countDocuments({filter})
            
            db.<collection>.countDocuments()

      *Example*
      ```js
      db.movies.countDocuments()
      ```
      ![alt text](image-26.png)

      *Example*
      ```js
      db.movies.countDocuments("imdb.rating":{
        $gte: 8
      })
      ```

      ![alt text](image-27.png)

---
**[Back To Top ⬆ ](#indexing)**

# MONGODB AGGREGATION

MongoDB Aggregation Framework is a powerful tool for performing data processing and analysis directly within the database. It allows you to transform and combine data from multiple documents, providing a way to conduct complex operations and analytics without the need to pull data into your application. Here's an introduction to its key concepts:

### 1. Aggregation Pipeline

The core of MongoDB’s aggregation framework is the **aggregation pipeline**. This is a series of stages that process documents. Each stage transforms the documents as they pass through the pipeline. The stages are executed in sequence, and the output of one stage is passed as input to the next stage.

### 2. Key Stages

- **$match**: Filters documents to pass only those that match the specified conditions.
- **$group**: Groups documents by a specified identifier and can calculate aggregates, such as sums, averages, and counts.
- **$project**: Reshapes documents, including or excluding fields, adding new fields, or computing new fields.
- **$sort**: Sorts documents by a specified field.
- **$limit**: Limits the number of documents passing through the pipeline.
- **$skip**: Skips a specified number of documents.
- **$unwind**: Deconstructs an array field from the input documents to output a document for each element.
- **$lookup**: Performs a left outer join to another collection to filter in documents from the “joined” collection.

**[Back To Top ⬆ ](#indexing)**

## Using `$match` and `$group` Stages in MongoDB Aggregation Pipeline

### Example 1: $match

Suppose you want to find all theaters in the city of Mansfield.

```javascript
db.theaters.aggregate([
  {
    $match: {
      "location.address.city": "Mansfield"
    }
  }
])
```

### Example 2: $group

Let's say you want to group theaters by state and count the number of theaters in each state.

```javascript
db.theaters.aggregate([
  {
    $group: {
      _id: "$location.address.state",
      theaterCount: { $count: {} }
    }
  }
])
```
![alt text](image-28.png)
### Combined Example: $match and $group

You might also want to find the count of theaters in each city within Texas (`TX`).

```javascript
db.theaters.aggregate([
  {
    $match: {
      "location.address.state": "TX"
    }
  },
  {
    $group: {
      _id: "$location.address.city",
      theaterCount: { $count: {} }
    }
  }
])
```
![alt text](image-29.png)

### Breakdown of the Stages

1. **$match Stage**:
    - Filters documents to pass only those that match the specified condition.
    - In the first example, it filters theaters located in Mansfield.
    - In the combined example, it filters theaters located in the state of Texas.

2. **$group Stage**:
    - Groups the documents by a specified identifier (e.g., city or state).
    - Computes aggregate values such as counts, sums, averages, etc.
    - In the second example, it groups theaters by state and counts them.
    - In the combined example, it groups theaters by city within Texas and counts them.

## Using `$sort` and `$limit` Stages in a MongoDB Aggregation Pipeline


### Example: $sort

Suppose you want to sort theaters by their `theaterId` in ascending order.

```javascript
db.theaters.aggregate([
  {
    $sort: {
      theaterId: 1
    }
  }
])
```

In this example, the `$sort` stage sorts the documents by the `theaterId` field in ascending order (1 for ascending, -1 for descending).

### Example: $limit

If you want to limit the results to the first 5 theaters, you can use the `$limit` stage.

```javascript
db.theaters.aggregate([
  {
    $limit: 5
  }
])
```

### Combined Example: $sort and $limit

Let's combine `$sort` and `$limit` to sort the theaters by `theaterId` in descending order and limit the results to the top 3 theaters.

```javascript
db.theaters.aggregate([
  {
    $sort: {
      theaterId: -1
    }
  },
  {
    $limit: 3
  }
])
```
![alt text](image-30.png)

### Breakdown of the Stages

1. **$sort Stage**:
    - Sorts the documents by the specified field(s).
    - In the combined example, it sorts the theaters by `theaterId` in descending order.

2. **$limit Stage**:
    - Limits the number of documents passing through the pipeline.
    - In the combined example, it limits the results to the top 3 theaters after sorting.

## Using `$project`, `$count` and `$set` Stages in a MongoDB Aggregation Pipeline

### Example: $project

Suppose you want to project only the `theaterId` and `location.address.city` fields from the documents.

```javascript
db.theaters.aggregate([
  {
    $project: {
      _id: 0,
      theaterId: 1,
      city: "$location.address.city"
    }
  }
])
```

In this example, the `$project` stage reshapes the documents to include only the `theaterId` and `city` fields.

### Example: $count

If you want to count the total number of theaters, you can use the `$count` stage.

```javascript
db.theaters.aggregate([
  {
    $count: "totalTheaters"
  }
])
```

### Example: $set

Let's say you want to add a new field `state` that duplicates the value of `location.address.state`.

```javascript
db.theaters.aggregate([
  {
    $set: {
      state: "$location.address.state"
    }
  }
])
```

### Combined Example: $match, $group, $project, and $set

Let's combine several stages: filter theaters in Texas (`$match`), group by city and count the number of theaters in each city (`$group`), project the results to include the city and count (`$project`), and then use $set to create a field "fullAddress" containing the street, city, state, and zip code separated by commas.

```javascript
db.theaters.aggregate([
  {
    $match: {
      "location.address.state": "TX"
    }
  },
  {
    $group: {
      _id: {
        city: "$location.address.city",
        street: "$location.address.street1",
        state: "$location.address.state",
        zipcode: "$location.address.zipcode"
      },
      theaterCount: { $sum: 1 }
    }
  },
  {
    $set: {
      fullAddress: {
        $concat: [
          "$_id.street", ", ",
          "$_id.city", ", ",
          "$_id.state", ", ",
          "$_id.zipcode"
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      theaterCount: 1,
      fullAddress: 1
    }
  }
])

```
![alt text](image-31.png)

### Breakdown of the Stages

1. **$match Stage**:
    - Filters documents to pass only those that match the specified condition (theaters in Texas).

2. **$group Stage**:
    - Groups the documents by city and counts the number of theaters in each city.

3. **$project Stage**:
    - Reshapes the documents to include only the `city` and `theaterCount` fields, and excludes the `_id` field.

4. **$set Stage**:
    - Adds a new field `label` with the value "Number of Theaters".

5. **$count Stage**:
    - Although not included in the combined example, it can be used to count the total number of documents passing through the pipeline.

**[Back To Top ⬆ ](#indexing)**

## Using `$out` Stage in a MongoDB Aggregation Pipeline

The `$out` stage in MongoDB’s aggregation pipeline writes the results of the aggregation to a specified collection. This stage must be the last stage in the pipeline.

Here’s an example of how to modify the previous pipeline to use the `$out` stage to write the results to a new collection called `texas_theaters_summary`:

```javascript
db.theaters.aggregate([
  {
    $match: {
      "location.address.state": "TX"
    }
  },
  {
    $group: {
      _id: {
        city: "$location.address.city",
        street: "$location.address.street1",
        state: "$location.address.state",
        zipcode: "$location.address.zipcode"
      },
      theaterCount: { $sum: 1 }
    }
  },
  {
    $set: {
      fullAddress: {
        $concat: [
          "$_id.street", ", ",
          "$_id.city", ", ",
          "$_id.state", ", ",
          "$_id.zipcode"
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      theaterCount: 1,
      fullAddress: 1
    }
  },
  {
    $out: "texas_theaters_summary"
  }
])
```

### Breakdown of the Stages with $out

1. **$match Stage**:
    - Filters documents to pass only those that match the specified condition (theaters in Texas).

2. **$group Stage**:
    - Groups the documents by a compound key of `city`, `street`, `state`, and `zipcode` and counts the number of theaters in each group.

3. **$set Stage**:
    - Adds a new field `fullAddress` that concatenates the `street`, `city`, `state`, and `zipcode` fields separated by commas.

4. **$project Stage**:
    - Reshapes the documents to include only the `theaterCount` and `fullAddress` fields, excluding the `_id` field.

5. **$out Stage**:
    - Writes the results of the aggregation pipeline to the specified collection `texas_theaters_summary`.

This pipeline processes the documents and writes the results to the `texas_theaters_summary` collection, which will contain documents like this:

```json
{
  "theaterCount": 1,
  "fullAddress": "2041 Highway 287 N, Mansfield, TX, 76063"
}
```
![alt text](image-32.png)

The `$out` stage will overwrite the `texas_theaters_summary` collection if it already exists. If it does not exist, MongoDB will create it.

**[Back To Top ⬆ ](#indexing)**
