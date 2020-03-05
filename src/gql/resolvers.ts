const axios = require('axios');
export const resolvers = {
    Query: {
        hello: () => 'Hello World',
        elements: async () => {
            try {
                const elements = await axios.get('http://localhost:8000/elements');
                return elements.data;
            } catch (err) {
                throw Error(`Error: ${err}`);
            }
        },
        element: async (_, { id }) => {
            try {
                const element = await axios.get(`http://localhost:8000/elements/${id}`);
                return element.data;
            } catch (err) {
                throw Error(`Error: ${err}`);
            }
        },
        elementBy: async (_, { atomicNumber, atomicMass, symbol, name }) => {
            try {
                const element = await axios.get(`http://localhost:8000/elements/by`,
                    {
                        params: {
                            atomicNumber: atomicNumber,
                            atomicMass: atomicMass,
                            symbol: symbol,
                            name: name
                        }
                    });
                return element.data;
            } catch (err) {
                throw Error(`Error: ${err}`);
            }
        }
    },
    Mutation: {
        addElement: async (_, { atomicNumber, atomicMass, symbol, name }) => {
            try {
                const element = await axios.post('http://localhost:8000/elements',
                    {
                        atomicNumber: atomicNumber,
                        atomicMass: atomicMass,
                        symbol: symbol,
                        name: name
                    },
                    {
                        headers: { 'Content-Type': 'application/json' }
                    });
                return element.data;
            } catch (err) {
                throw Error(`Error: ${err}`);
            }
        },
        updElement: async (_, { id, atomicNumber, atomicMass, symbol, name }) => {
            try {
                const element = await axios.patch(`http://localhost:8000/elements/${id}`,
                    {
                        atomicNumber: atomicNumber,
                        atomicMass: atomicMass,
                        symbol: symbol,
                        name: name
                    },
                    {
                        headers: { 'Content-Type': 'application/json' }
                    });
                return element.data;
            } catch (err) {
                throw Error(`Error: ${err}`);
            }
        },
        delElement: async (_, { id }) => {
            try {
                const element = await axios.delete(`http://localhost:8000/elements/${id}`,
                    _,
                    {
                        headers: { 'Content-Type': 'application/json' }
                    });
                return element.data;
            } catch (err) {
                throw Error(`Error: ${err}`);
            }
        },
        delElementBy: async (_, { atomicNumber, atomicMass, symbol, name }) => {
            try {
                const element = await axios.delete(`http://localhost:8000/elements/by`,
                    {
                        params: {
                            atomicNumber: atomicNumber,
                            atomicMass: atomicMass,
                            symbol: symbol,
                            name: name
                        }
                    },
                    {
                        headers: { 'Content-Type': 'application/json' }
                    });
                return element.data;
            } catch (err) {
                throw Error(`Error: ${err}`);
            }
        }
    }
};