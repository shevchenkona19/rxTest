import {SUBSCRIBE_TO_READINGS, UNSUBSCRIBE_FROM_READINGS, UPDATE_READINGS} from "../constants/actionTypes";
import provide from "../provider/infoProvider";
import {mainObservable} from "../provider/infoProvider";

export const subscribeAction = () => dispatch => {
    const subscription = mainObservable.subscribe(values => {
        dispatch({
            type: UPDATE_READINGS,
            readings: values
        })
    });
    dispatch({
        type: SUBSCRIBE_TO_READINGS,
        subscription
    });
    provide()
};

export const unsubscribeAction = subscription => dispatch => {
    subscription.unsubscribe();
    dispatch({
        type: UNSUBSCRIBE_FROM_READINGS
    })
};