export const updateReadingsReducer = (state, action) => ({
    ...state,
    readings: action.readings
});