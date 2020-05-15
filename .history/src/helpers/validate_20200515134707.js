
How to handle data validation in Node using validatorJS
January 13, 2020  4 min read 


Building backend APIs comes with many hassles. One of which is user input validation. It’s important to add an extra layer of validation to incoming data because you can never rely on the users’ input alone. There are many ways of carrying out input validation in Node.js. For simplicity purposes, we will consider validatorJS — a validation library inspired by the Laravel framework’s validator.

In this tutorial, we will learn how to handle data validation in Node using validatorJS.

Prerequisites
This tutorial uses the following:

Basic knowledge of Node.js
Yarn or NPM installed (we’ll be using yarn)
Basic knowledge of mongo is nice to have
A system running node version 10.5.0 or higher
Installation
Let’s launch the following commands to initialize the project directory:

$ git clone -b boilerplate https://github.com/enkaypeter/validatorjs-tutorial 
$ cd validatorjs-tutorial && yarn
Packages installed:

Express: A lightweight Node.js web framework for spinning up RESTful APIs. We will use this to handle routing in our backend API
body-parser: A middleware to parse incoming request inputs into our req.body object
mongoose: An object modeling tool for MongoDB. This will help create and query our User schema
morgan: HTTP request logger middleware for Node.js. This will help us debug our API while in development
validatorJS: A validation library for handling input data validation
Basic usage
In this section, we will learn how to carry out basic input validation and how to set up our Node project. To get started, we are going to write a simple validation middleware to validate user inputs on sign up:

// src/helpers/validate.js

const Validator = require('validatorjs');
const validator = (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

module.exports = validator;