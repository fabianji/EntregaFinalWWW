import ApolloClient from 'apollo-boost';


export const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
});