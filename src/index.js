const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation").default;
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");
const Subscription = require("./resolvers/Subscription");

/*let links = [
  {
    id: "link-0",
    url: "www.hottographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
];*/

// 1
//let idCount = links.length;
// index

// 2
//const resolvers = {
// Query: {
//  info: () => `This is the API of a Hackernews Clone`,
// feed: (root, args, context, info) => {
//    return context.prisma.links();
// },
//  },
// Mutation: {
// 2
//  post: (root, args, context) => {
//    return context.prisma.createLink({
//     url: args.url,
//     description: args.description,
//  });
//  },
//  deleteLink: (parent, args) => {
//   const link = {
//     id: args.id,
//    };
//   for (var i = 0; i < idCount; i++) {
//    var cutoff = args.id.substr(5, args.id.length);
//     if (cutoff == i) {
//     links.splice(i);
//   }
//   }
// return link;
// },
//update
//search by id
//  },
//};

// 3

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
};
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});

server.start(() => console.log(`Server is runnng on http://localhost:4000`));
