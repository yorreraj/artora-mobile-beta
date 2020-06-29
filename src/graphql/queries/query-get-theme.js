import { gql } from "apollo-boost";

export const QUERY_GET_THEME = gql`
    query {
        theme @client
    }
`