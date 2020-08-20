const serverless = require('serverless-http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const cors = require('cors');
const resolvers = require('./lib/graphutils/resolvers');

const schemaFile = path.join(__dirname, './lib/graphutils/schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf8');
const schema = makeExecutableSchema({ typeDefs, resolvers });
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send(`Hello World!`);
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports.handler = serverless(app);
