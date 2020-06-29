import { useQuery } from "@apollo/react-hooks"
import { QUERY_LIST_PRODUCT } from "../queries/query-product-list";

export const useQueryListProduct = () => {
    const { data, fetchMore, loading } = useQuery( QUERY_LIST_PRODUCT, {
        variables: {
            offset: 0,
            limit: 15
        },
        fetchPolicy: "cache-and-network",
        notifyOnNetworkStatusChange: "true"
    })

    return { data, loading, handleFetchMore: () => {
        fetchMore({
            variables: { offset: data.products.length },
            updateQuery: (prev,  { fetchMoreResult }) => {
                if(!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    products: [...prev.products, ...fetchMoreResult.products]
                })
            }
        })
    }}
}