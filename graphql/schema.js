// trong schema {} se nhan 2 gia tri: query va mutation, query la de lay gia tri, mutation la de edit du lieu

const { buildSchema } = require("graphql");

const userSchema = `
    type User {
        id: ID !
        userName: String !
        age: Int !

    }
`;

const rootQuery = `
    type RootQuery {
        getUser: [User] 
    }
`;

const rootMutation = `
    type RootMutation {
        
    }
`;

const schema = `
    query: RootQuery
    mutation: RootMutation
`;

const graphqlSchema = buildSchema(`
  ${userSchema}
`);

module.exports = graphqlSchema;
