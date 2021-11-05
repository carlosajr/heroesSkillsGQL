const { readdirSync } = require('fs')
const { mergeSchemas } = require('@graphql-tools/schema');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { gql } = require('apollo-server-lambda');

const schemas = readdirSync(__dirname)
                .filter(file => file !== 'index.js')
                .map(folder => require(`./${folder}`))
                .map(({schema, resolvers}) => {
                    return makeExecutableSchema({
                        typeDefs: gql(schema),
                        resolvers
                      });
                })

module.exports = mergeSchemas({
    schemas
})