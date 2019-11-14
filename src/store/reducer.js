const initialState = {
    age:20,
    show: false
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP_ASYNC': 
            newState.age += action.value;
            break;
        
        case 'AGE_DOWN_ASYNC': 
            newState.age -= action.value;
            break;

        case "TOGGLE_MODAL":
            newState.show = !state.show;
            console.log(newState.show);
            break;

        default:
    }
    return newState;
};

export default reducer;