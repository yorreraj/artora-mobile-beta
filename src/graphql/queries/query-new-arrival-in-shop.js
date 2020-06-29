import { gql } from "apollo-boost";

export const QUERY_NEW_ARRIVAL_IN_SHOP = gql`
    query NewArrivalInShop($shopId:String!){
        newProductsFromShop(shopId:$shopId){
            id,
            name,
            available,
            picturesUri,
            prices{ amount, currency }
        }
    }
`