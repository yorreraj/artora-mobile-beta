import { clearThemeCache } from "native-base-shoutem-theme";
import { QUERY_GET_THEME } from '../../../queries/query-get-theme';

const switchTheme = (_, args , { cache }) => {
    const { theme } = cache.readQuery({query:QUERY_GET_THEME})
    clearThemeCache()
    cache.writeData({data:{ theme:theme === "light"?"dark":"light"}})
}
export default switchTheme;