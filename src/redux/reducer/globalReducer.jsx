import ActionType from './globalActionType'

// global state
const globalState = {
    listName: '',
    cartItem: [],

}

// reducer
const rootReducer = (state = globalState, action) => {
    if (action.type === ActionType.ADD_LIST) {
        return {
            ...state,
            cartItem: state.cartItem.count

        }

    }
    return state;
}

export default rootReducer;