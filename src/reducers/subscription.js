export const subscribeReducer = (state, action) => ({
    ...state,
    subscription: action.subscription
});

export const unsubscribeReducer = (state, action) => ({
    ...state,
    subscription: "",
});