import defaultsState from './defaults-state';
import switchTheme from './resolvers/mutations/mutation-switch-theme';

const clientState = {
    defaults:defaultsState,
    resolvers:{
        Mutation:{ switchTheme }
    }
}

export default clientState;