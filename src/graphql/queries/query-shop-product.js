import { gql } from "apollo-boost";

export const QUERY_SHOP_PRODUCT = gql`
    query ShopProducts($shopId:String!){
        familiesOfProductsInShop(shopId:$shopId){
            id,
            name,
            categories{
                id,
                name,
                subCategories{
                    id,
                    name
                }
            }
        }
        
        newProductsFromShop(shopId:$shopId){
            id,
            name,
            available,
            pictures{uri, isMain}
            prices{amount, currency, isMain}
        }
    }
`