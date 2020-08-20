const { makeExecutableSchema } = require('graphql-tools');
const path = require('path');
const fs = require('fs');
const resolvers = require('./lib/graphutils/resolvers');

const schemaFile = path.join(__dirname, './lib/graphutils/schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf8');
const schema = makeExecutableSchema({ typeDefs, resolvers });

exports.schema = schema;
exports.typeDefs = typeDefs;
exports.resolvers = resolvers;
