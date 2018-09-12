import provide from "./provider/infoProvider";
import {mainObservable} from "./provider/infoProvider";
import React from 'react';
import renderer from 'react-test-renderer';
import Label from "./components/mainScreen/Label";

test('should show values for health monitor', () => {
    let subscription = mainObservable.subscribe(values => {
        const isRightObject = values.temperature && values.humidity && values.pressure;
        expect(isRightObject).toBe(true);
        subscription.unsubscribe();
    });
    provide();
});

test("should render right label", () => {
    const component = renderer.create(<Label text={"testing some labels"}/>);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});