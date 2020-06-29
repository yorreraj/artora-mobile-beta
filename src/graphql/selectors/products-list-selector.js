export const productsListSelector = (data) => data.products.map(({id, name, prices, picturesUri}) => ({
    id,
    name,
    price:prices[0].amount,
    uri:picturesUri[0]
}))