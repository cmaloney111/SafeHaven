Note for grader: Sequence Diagrams are the two '.png' files in the root of the repo

To run from the repository's root folder, install concurrently with:

```
npm install concurrently
```

Then simply run with:

```
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
