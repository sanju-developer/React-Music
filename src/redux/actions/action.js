export function AgeUpAsync(val) {
    return ({ type: 'AGE_UP', payload: val })
}

export function AgeUp(val) {
    // return async (dispatch,getState) => {
    //     dispatch({type: "LOADING"})
    //     await fetch()
    //     fetch()
    //     .then(()=>dispatch({type: "SUCESS"}))
    //     .catch(()=>dispatch({type: "FAILURE"}))
    // }
    return dispatch =>
        setTimeout(() => {
            dispatch(AgeUpAsync(val))
        }, 3000);
}

export function AgeDown(val) {
    return { type: 'AGE_DOWN', payload: val }   
}