import { gql } from "apollo-boost";

export const QUERY_CATEGORIES_PERSON = gql`
    query{
        categoriesPerson{
            id,
            name
        }
    }
`