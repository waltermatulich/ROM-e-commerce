Below is a google drive link which contains a screen recording of a video walkthrough of my website and how it's made and used! Thank you for your time!

https://drive.google.com/file/d/1E1pwn8ctbFFB2qYTTURnZAUJlfEOhaxX/view


Database Configuration and Management


This project leverages Sequelize ORM to facilitate a seamless connection and interaction with a MySQL database, ensuring that users can easily manage their data for development purposes. To start, users must input their database credentials, including the database name, MySQL username, and MySQL password, into an environment variable file (.env). This step is crucial for securing database access and ensuring that the application can successfully connect to the MySQL database. Following this, the application supports schema creation and seeding through designated commands, allowing for the automated setup of a development database populated with test data. This functionality ensures that the database is ready for use, with predefined data sets available for development testing and verification processes.

Server Initialization and API Interaction


Upon configuring the database and populating it with initial data, users can start the server by executing the provided command, which not only launches the server but also ensures that Sequelize models are in sync with the MySQL database. This synchronization guarantees that the database schema is up-to-date with the models defined in the application. The API's functionality is showcased through its ability to interact with the database via GET, POST, PUT, and DELETE routes, which can be tested using Insomnia Core. This offers a user-friendly interface for developers to validate the creation, retrieval, updating, and deletion of data within the database. The formatted JSON responses for categories, products, or tags when accessing GET routes, along with the capability to modify data through POST, PUT, and DELETE requests, highlight the API's robustness and flexibility in managing database interactions.
