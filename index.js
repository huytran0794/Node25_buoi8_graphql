const express = require("express");

/* import graphqlhttp */
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolver");

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.static("."));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema, // noi nhan vao cac doi tuong duoc quan ly ben thu muc graphql -> file schema.js
    rootValue: graphqlResolver, // noi xu ly cac logic, chuc nang, ... quan ly ben thu muc graphql -> resolver.js
    graphiql: true, // mo len 1 giao dien giong swagger a
  })
);

app.listen(port);
