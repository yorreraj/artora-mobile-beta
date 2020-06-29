import { gql } from "apollo-boost";

export const QUERY_SHOPS = gql`
    query ListShops{
        shops{
            id
            name
            photoUri
            pointsOfSale{id,location}
        }
    }
`