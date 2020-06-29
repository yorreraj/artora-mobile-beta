import { gql } from "apollo-boost";

export const QUERY_GET_CONNECTED_USER = gql`
    query GetConnectedUser{
        connectedUser @client {
            user{
                id,
                name
            }
        }
    }
`