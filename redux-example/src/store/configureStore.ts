import { createStore} from 'redux'
import { rootReducer} from "./AppState";

const configStore = () => {
    return createStore(rootReducer, {});
};

export default configStore;