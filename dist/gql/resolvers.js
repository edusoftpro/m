"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
exports.resolvers = {
    Query: {
        hello: () => 'Hello World',
        elements: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const elements = yield axios.get('http://localhost:8000/elements');
                return elements.data;
            }
            catch (err) {
                throw Error(`Error: ${err}`);
            }
        }),
        element: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const element = yield axios.get(`http://localhost:8000/elements/${id}`);
                return element.data;
            }
            catch (err) {
                throw Error(`Error: ${err}`);
            }
        }),
        elementBy: (_, { atomicNumber, atomicMass, symbol, name }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const element = yield axios.get(`http://localhost:8000/elements/by`, {
                    params: {
                        atomicNumber: atomicNumber,
                        atomicMass: atomicMass,
                        symbol: symbol,
                        name: name
                    }
                });
                return element.data;
            }
            catch (err) {
                throw Error(`Error: ${err}`);
            }
        })
    },
    Mutation: {
        addElement: (_, { atomicNumber, atomicMass, symbol, name }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const element = yield axios.post('http://localhost:8000/elements', {
                    atomicNumber: atomicNumber,
                    atomicMass: atomicMass,
                    symbol: symbol,
                    name: name
                }, {
                    headers: { 'Content-Type': 'application/json' }
                });
                return element.data;
            }
            catch (err) {
                throw Error(`Error: ${err}`);
            }
        })
    }
};
//# sourceMappingURL=resolvers.js.map