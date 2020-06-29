import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import getTheme from "../../../native-base-theme/components";
import lightColor from "../../../native-base-theme/variables/lightColor";
import darkColor from "../../../native-base-theme/variables/darkColor";
import { lightColors, darkColors } from "./theme-colors";


const QUERY_THEME = gql`
    query {
        theme @client
    }
`

function useTheme(){
    const { data } = useQuery(QUERY_THEME)

    const themeMode = data.theme
    const barStyle = themeMode === "light" ? "dark-content":"light-content"
    const theme = getTheme(themeMode === "light" ? lightColor : darkColor)
    const colors = themeMode === "light" ? lightColors : darkColors

    return {themeMode, barStyle, theme, colors}
    
}
export default useTheme;