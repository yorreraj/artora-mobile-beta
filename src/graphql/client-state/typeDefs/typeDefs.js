import { gql } from "apollo-boost";

export const typeDefs = gql`
    type ConnectedUser{
        user: User!
    }

    extend type Mutation{
        addConnectedUser(user: User!):ConnectedUser!
    }

    extend type Query{
        connectedUser: ConnectedUser!
    }
`