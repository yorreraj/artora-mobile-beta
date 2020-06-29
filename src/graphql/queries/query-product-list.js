import { gql } from "apollo-boost";

export const QUERY_LIST_PRODUCT = gql`
    query ListProducts($offset: Float!, $limit: Float!){
        products(offset: $offset, limit: $limit){
            id,
            name,
            available,
            picturesUri,
            prices{ amount, currency }
        }
    }
`