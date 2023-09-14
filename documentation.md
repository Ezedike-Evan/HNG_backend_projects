# My RESTful API Documentation
Welcome to the documentation for the My RESTful API. This API allows you to perform CRUD operations on a "person" resource, using MongoDB as the database and Mongoose as the ODM.

## Table of Contents
- [Getting Started](#getting-started)
- [API Endpoints](https://hng-stage-2-6gmm.onrender.com/api)
  - [Create a Person(POST)]
  - [Retrieve a Person by name(GET)]
  - [Update a Person(PUT)]
  - [Delete a Person(DELETE)]
- [Request and Response Formats](#request-and-response-formats)
- [Known Limitations](#known-limitations)

## Getting Started

1. Create a Person
   - Endpoint: POST https://hng-stage-2-6gmm.onrender.com/api
   - for the post request, only the name field is required. Also the name is unique i.e no two names can be the same The name field is also case sensitive 

     Request Body:
     ```bash
       {
          "name" : "John",
          "age" : 34,
          "gender" : "male"
       }  
    Response (201 Created):
     ```bash
       {
         "_id": "5f6b6419aeb175214c5d7a24",
         "name": "John",
         "age": 34,
         "gender": "male"
         "__v": 0
       }
     
2. Retrieve a Person by Name
   - Endpoint: GET https://hng-stage-2-6gmm.onrender.com/api/John
   - This is to get the details of a person.For this get request, the name of the person is passed as the user_id parameter 

    Response (200 OK):
     ```bash
       {
         "_id": "5f6b6419aeb175214c5d7a24",
         "name": "John",
         "age": 34,
         "gender": "male"
         "__v": 0
       }
     
 3. Update a Person
    - Endpoint: PUT https://hng-stage-2-6gmm.onrender.com/api/John
    - This is to modified the details of a person.For this put request, the name of the person is passed as the user_id parameter

     Request Body:
     ```
       {
          "name" : "Evan",
          "age" : 100,
          "gender" : "female"
       }
     ``` 
    Response (200 Ok):
     ```bash
       {
         "_id": "5f6b6419aeb175214c5d7a24",
         "name": "Evan",
         "age": 100,
         "gender": "female"
         "__v": 0
       }

    
4. Delete a Person by Name
   - Endpoint: DELETE https://hng-stage-2-6gmm.onrender.com/api/John
   - This is to delete a person.For this delete request, the name of the person is passed as the user_id parameter 

    Response (200 OK):
     ```bash
       {
         "message": "Person deleted"
       }
         
## Request and Response Formats
1. Create a Person (POST https://hng-stage-2-6gmm.onrender.com/api)

     Request Body:
     ```
       name(string, required, unique): The name of the person
       age(number) : Age of the person
       gender(enum, lowercase) : male or female
     ```
    Response Body:
    ```
      id (string): The unique identifier of the created person.
      name (string): The name of the person.
      age(number) : Age of the person.
      gender(enum, lowercase) : male or female.
       __v (number): MongoDB version key (internal use).
    ```

2.  Retrieve a Person by Name (GET https://hng-stage-2-6gmm.onrender.com/api/user_id)

    Response Body:
    ```
      id (string): The unique identifier of the person.
      name (string): The name of the person.
      age(number) : Age of the person (if available).
      gender(enum, lowercase) : male or female (if available).
       __v (number): MongoDB version key (internal use).
    ```

3. Update a Person (PUT https://hng-stage-2-6gmm.onrender.com/api/user_id)

     Request Body:
     ```
       name(string, unique): The new name of the person
       age(number) : The new age of the person
       gender(enum, lowercase) : the new gender of the person
     ```
    Response Body:
    ```
      id (string): The unique identifier of the created person.
      name (string): The new name of the person.
      age(number) : The new age of the person.
      gender(enum, lowercase) :The new gender of the person.
       __v (number): MongoDB version key (internal use).
    ```

4.  Delete a Person by Name (DELETE https://hng-stage-2-6gmm.onrender.com/api/user_id)

    Response Body:
    ```
      message (string): A confirmation message indicating that the person has been deleted.
    ```

## Known Limitations
1. Create a Person
   - Names are unique i.e no two names can be the same
     - response (500 Internal Server Error)  
     ```
       {
          "error": "E11000 duplicate key error collection: test.people index: name_1 dup key: { name: \"ezedike evan\" }"
       }
     ```
   - Name is required
     - response (500 Internal Server Error)  
     ```
       {
          "error": "Person validation failed: name: Path `name` is required."
       }
     ```
   - gender isn't valid
     - response (500 Internal Server Error)  
     ```
       {
          "error": "Person validation failed: gender: `{gender attribute}` is not a valid enum value for path `gender`."
       }
     ```

2. Retrieve a Person by Name
   - No Person with the name exist 
     - response (404 Not Found)  
     ```
       {
          "error": "Person not found"
       }
     ```
   - No person name was passed
     - response (404 Not Found)  
     ```
       <!DOCTYPE html>
       <html lang="en">
       <head>
       <meta charset="utf-8">
       <title>Error</title>
         </head>
       <body>
       <pre>Cannot GET /api/</pre>
       </body>
       </html>
     ```

3. Update a Person
   - If name wasn't update. it sets the name to null
     - request body
       ```
         {
            "age" : 100,
            "gender" : "female"
         }
       ```
     - response (200 OK)
       ```
         {
           "_id": "6502c9d1980ef30033581545",
           "name": null,
           "age": 100,
           "gender": "female",
           "__v": 0
         }
    - Person wasn't found
      - response
        ```
          {
              "error": "Person not found"
          }
        ```
4. Delete a person   
   - No person name was passed
     - response (404 Not Found)  
     ```
       <!DOCTYPE html>
       <html lang="en">
       <head>
       <meta charset="utf-8">
       <title>Error</title>
       </head>
       <body>
       <pre>Cannot DELETE /api/</pre>
       </body>
       </html>
     ```
