-- Check if the ecommerce_db exists and drop it if it does
IF EXISTS (SELECT * FROM sys.databases WHERE name = 'ecommerce_db')
DROP DATABASE ecommerce_db;

-- Proceed to create the ecommerce_db
CREATE DATABASE ecommerce_db;
