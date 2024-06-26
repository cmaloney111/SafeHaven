
Note for grader: Sequence Diagrams are the two '.png' files in the root of the repo. Also, the deployed app may take a few minutes to boot up.

# How to run

To run from the repository's root folder, install concurrently with:

```
npm install concurrently
```

Then simply run with:

```
npm install
npm start
```

or run the development mode with

```
npm run dev
```

Also, make sure to create a .env file in express-backend and add
`MONGODB_URI = "your_connection_string"`
and
`TOKEN_SECRET = 1234`

# Configurations
You can run a linter (specifically eslint) to find potential sources of error in the code with: 
```
npm run eslint
```
and can change what it ignores, warns, or errors for in the eslint.config.mjs file located in the root.

You can also enforce a consistent style on the code with:
```
npm run prettier
```

And can add more rules to this in the .prettierrc file located in the root.

# UI Prototype and Statement about Coding Standards
We did not adopt any official coding style. Instead, we tried to match our original Figma as much as possible, which you can see here:
 https://www.figma.com/file/LEEXoiNaKNr2uPQo002aQm/SaveHaven-site?type=design&node-id=0%3A1&mode=design&t=1YXDdRgnNafMAqs2-1

# General

Project Description:
SafeHaven is a company dedicated to optimizing storage management solutions for businesses. Our product scales easily, displays critical order insights, and is affordably priced.
We offer a seamless inventory and order tracking system, suiting the needs of businesses in many industries.

Project vision: 
For small businesses interested in shipping who need a software system to manage inventory logistics. Safe Haven is an inventory management software that is affordable, functional, and scalable. Unlike Katana, our product is inexpensive and accessible to small businesses.



CSC307 Safe Haven Demo Video:
https://youtu.be/EfknrWC4x_U
