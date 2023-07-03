import { increase,decrease } from './counttypes'
const increaseAction = () => {
    return {
        type: increase
    }
}
const decreaseAction = () => {
    return {
        type: decrease
    }
}

export { increaseAction, decreaseAction }