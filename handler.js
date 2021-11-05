'use strict';

const { ApolloServer, gql } = require('apollo-server-lambda');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const setupDynamoDBClient = require('./src/core/util/setupDynamoDB')
setupDynamoDBClient()

const HeroFactory = require('./src/core/factories/heroFactory')
const SkillFactory = require('./src/core/factories/skillFactory')

const isLocal = process.env.IS_LOCAL

const schema = require('./src/graphql')

const server = new ApolloServer({
  schema: schema,
  context: async () => ({
    Hero: await HeroFactory.createInstance(),
    Skill: await SkillFactory.createInstance()
  }),
  introspection: isLocal,
});

exports.handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*',
      credentials: false
    }
  },
});