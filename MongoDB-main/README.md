# MongoDB
Node.js MongoDB Project

.

###  Web Service Using Node.js and MongoDB

build a complete  web service that handles CRUD operations for a Person collection.

```typescriptreact project="node_mongo_rest"
...
```

## Project Structure

```plaintext
node-mongo-rest-api/
├── app.js                  # Main application file
├── package.json            # Project dependencies
├── models/
│   └── Person.js           # Person model schema
├── routes/
│   └── personRoutes.js     # Routes for person CRUD operations
├── views/
│   ├── index.ejs           # List all people
│   ├── new.ejs             # Form to create a new person
│   ├── edit.ejs            # Form to edit a person
│   ├── delete.ejs          # Confirmation page for deletion
│   └── error.ejs           # Error page
└── public/
    └── css/
        └── styles.css      # Styling for the application
```

## How to Run the Application

1. Make sure you have Node.js and MongoDB installed on your system.
2. Create a new directory for your project and copy all the files above.
3. Open a terminal in the project directory and run:


```shellscript
npm install
```

4. Start MongoDB on your local machine.
5. Start the application:


```shellscript
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000`


## Features Implemented

1. **GET /person**: Displays a table with a list of all people in the database
2. **POST /person**: Provides a form to create a new person and handles the form submission
3. **PUT /person/id**: Displays a form to edit an existing person and processes the update
4. **DELETE /person/id**: Shows a confirmation page and handles the deletion process





