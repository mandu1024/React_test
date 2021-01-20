import * as types from '../actions/ActionTypes'

const initialState = {
    number: 0,
    dummy: 'dumbdumb'
};

export default function counter(state = initialState, actions){
    
    switch(actions.type){
        case types.INCREMENT:
            return {...state, nubmber: state.number+1};
        case types.DECREMENT:
            return { ...state, number: state.number-1};
        default:
            return state;
    }

}