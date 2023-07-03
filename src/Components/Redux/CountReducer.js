import { increase, decrease } from "./counttypes"
const initstate = { count: 0, Name:'IT' }
function CountReducer(state = initstate, action) {
    switch (action.type) {
        case increase: return {
            ...state,
            count: state.count + 1
        }
        case decrease: {if (state.count === 0) {
            return {
                ...state,
                count: 0
            }}
            else {
               return{ ...state,count: state.count - 1}
            }
        }
        default: return state
    }
}

export default CountReducer;