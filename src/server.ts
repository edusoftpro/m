require('dotenv').config();

import { typeDefs } from './gql/schema';
import { resolvers } from './gql/resolvers';

const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const elementsRouter = require('./routes/elements');
const localPort = process.env.APP_PORT;

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
/* eslint-disable no-console */
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.use(express.json());
app.use('/elements', elementsRouter);

app.listen({ port: localPort }, () => {
  console.log(`Server ready at http://localhost:${localPort}${server.graphqlPath}`);
})
/* eslint-enable no-console */
