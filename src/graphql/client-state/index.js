import defaultsState from './defaults-state';
import switchTheme from './resolvers/mutations/mutation-switch-theme';
import { typeDefs } from './typeDefs/typeDefs';

const clientState = {
    defaults:defaultsState,
    resolvers:{
        Mutation:{ switchTheme }
    },
    typeDefs
}

export default clientState;