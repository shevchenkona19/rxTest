import {initState} from "../store";
import * as t from "../constants/actionTypes";
import {subscribeReducer, unsubscribeReducer} from "./subscription";
import {updateReadingsReducer} from "./update";

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case t.SUBSCRIBE_TO_READINGS:
            return subscribeReducer(state, action);
        case t.UNSUBSCRIBE_FROM_READINGS:
            return unsubscribeReducer(state, action);
        case t.UPDATE_READINGS:
            return updateReadingsReducer(state, action);
        default:
            return state;
    }
};