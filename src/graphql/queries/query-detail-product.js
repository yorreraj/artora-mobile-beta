import { gql } from "apollo-boost";

export const QUERY_DETAIL_PRODUCT = gql`
    query DetailsProduct($productId:String!){
        product(productId:$productId){
            id,
            name,
            available,
            youtubeVideoId,
            newArrival,
            inTheNew,
            inTheNewSince,
            createdOn,
            colors,
            pictures{id, uri, isMain},
            descriptions{id, title,content},
            prices{id, label,amount,currency, isMain},
            subCategories{name},
            pointsOfSale{id, name, location, shop{name}}
        }
    }
`;