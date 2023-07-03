import { createStore } from 'redux'
import CountReducer from './CountReducer'

function configureStore() {
    return createStore(CountReducer);
}
export default configureStore;
