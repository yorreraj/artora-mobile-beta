export const shopsListSelector = data => data.shops.filter(({pointsOfSale}) => pointsOfSale.length > 0).map(({id, name, photoUri, pointsOfSale}) => ({
    id,
    name,
    description:"",
    location:pointsOfSale[0].location,
    imageUri:photoUri
}))
 