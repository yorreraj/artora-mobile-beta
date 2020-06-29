import { gql } from "apollo-boost";

export const MUTATION_SWITCH_THEME = gql`
    mutation ($theme: String!) {
        switchTheme(theme: $theme) @client
    }
`;