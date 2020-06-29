import { gql } from "apollo-boost";

export const QUERY_USER_PREFERENCE_DATA = gql`
    query {
        categoriesPerson{
            id,
            name
        },
        familiesProduct {
            id
            name
            categories {
                id
                name
            }
        },
        shops {
            id
            name
            photoUri
            pointsOfSale {
                id
                name
                mainPointOfSale
            }
        }
    }
`