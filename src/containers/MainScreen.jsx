import React from "react";
import {connect} from "react-redux";
import {subscribeAction, unsubscribeAction} from "../actions/subscription";
import Label from "../components/mainScreen/Label";

class MainScreen extends React.Component {

    componentDidMount() {
        this.props.subscribe();
    }

    componentWillUnmount() {
        this.props.unsubscribe(this.props.subscription);
    }

    render() {
        const {temperature, humidity, pressure} = this.props.readings;
        return (
            <React.Fragment>
                <br/>
                <Label text={`Temperature: `}/> <Label text={`${temperature}`}/>
                <br/>
                <Label text={`Humidity: `}/> <Label text={`${humidity}`}/>
                <br/>
                <Label text={`Pressure: `}/> <Label text={`${pressure}`}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    readings: state.readings,
    subscription: state.subscription,
});

const mapDispatchToProps = dispatch => ({
    subscribe: () => dispatch(subscribeAction()),
    unsubscribe: subscription => dispatch(unsubscribeAction(subscription)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);