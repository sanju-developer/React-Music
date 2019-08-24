import { AGE_DOWN, AGE_UP } from "../constant";

const intialState = {
    age: 10
}

const AgeReducer = (state = intialState, action) => {
    const newState = { ...state };

    switch (action.type) {

        case AGE_DOWN:
                newState.age -= action.payload;
                return newState;

        case AGE_UP:
                newState.age += action.payload;
                return newState;

        default:
            return state;
    }
}

export default AgeReducer;