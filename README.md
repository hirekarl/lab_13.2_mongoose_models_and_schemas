# Lab 13.2: Mongoose Models and Schemas

[Karl Johnson](https://github.com/hirekarl)  
2025-RTT-30  
<time datetime="2025-08-21">2025-08-21</time>  

![Screenshot of four database items in "books" collection in MongoDB Compass.](./preview.png)

## Overview
### Viewer Instructions
1. In the terminal, run:

```bash
cd digital-bookshelf-api && npm i && npm run dev
```

2. Test given API endpoints at http://localhost:3001/api/books/ in, e.g., Postman.

### Submission Source
Main application behavior can be found in [`./digital-bookshelf-api/server.js`](./digital-bookshelf-api/server.js).

### Reflection
1. Why is it beneficial to separate your routes, models, and database connection into different directories?
>

2. What is the difference between `PUT` and `PATCH` HTTP methods, and which one does your `PUT /:id` endpoint more closely resemble?
>

3. In the `DELETE` route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?
>

## Assignment
A local library wants to modernize its book tracking system. They have hired you to build the backend for a new “Digital Bookshelf” application. Your first task is to create a RESTful API that allows librarians to manage their book inventory. This API must support creating new book records, viewing the list of all books, finding a specific book by its ID, updating a book’s information, and removing a book from the collection.
