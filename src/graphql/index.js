import ApolloClient, { InMemoryCache } from 'apollo-boost'
import clientState from './client-state';

const client = new ApolloClient({
    uri:"http://192.168.1.101:4000",
    cache:new InMemoryCache(),
    clientState
})

export default client;