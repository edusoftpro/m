"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const schema_1 = require("./gql/schema");
const resolvers_1 = require("./gql/resolvers");
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const elementsRouter = require('./routes/elements');
const localPort = process.env.APP_PORT;
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
/* eslint-disable no-console */
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));
// console.log(resolvers);
const server = new ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers });
const app = express();
server.applyMiddleware({ app });
app.use('/graphql', expressGraphQL({
    // schema: gqlSchema,
    graphiql: true
}));
app.use(express.json());
app.use('/elements', elementsRouter);
app.listen({ port: localPort }, () => {
    console.log(`Server ready at http://localhost:${localPort}${server.graphqlPath}`);
});
/* eslint-enable no-console */
//# sourceMappingURL=server.js.map