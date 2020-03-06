"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.typeDefs = graphql_tag_1.default `
  type Query {
    hello: String
    elements: [Element]
    element(id: String!): Element
    elementBy(atomicNumber: Int, atomicMass: Float, symbol: String, name: String ): [Element]
  }
  type Mutation {
    addElement(atomicNumber: Int!, atomicMass: Float!, symbol: String!, name: String! ): Element
    updElement(id: String!, atomicNumber: Int, atomicMass: Float, symbol: String, name: String ): Element
    delElement(id: String! ): String
    delElementBy(atomicNumber: Int, atomicMass: Float, symbol: String, name: String ): String
  }
  type Element {
    _id: String!
    atomicNumber: Int!
    atomicMass: Float!
    symbol: String!
    name: String!
  }
`;
//# sourceMappingURL=schema.js.map