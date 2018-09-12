import events from "events";
import * as Rx from "rxjs";
import {combineLatest} from "rxjs";
import {auditTime} from "rxjs/operators";

const temperature = new events.EventEmitter();
const humidity = new events.EventEmitter();
const airPressure = new events.EventEmitter();

const temp = Rx.Observable.create(observable => {
    let na = "";
    try {
        temperature.on("data", data => {
            clearInterval(na);
            na = setInterval(() => observable.next("N/A"), 1000);
            return observable.next(data.toFixed(2));
        })
    } catch (e) {
        observable.error(e);
    }
});
const humid = Rx.Observable.create(observable => {
    let na = "";
    try {
        humidity.on("data", data => {
            clearInterval(na);
            na = setInterval(() => observable.next("N/A"), 1000);
            return observable.next(data.toFixed(2));
        })
    } catch (e) {
        observable.error(e);
    }
});
const pressure = Rx.Observable.create(observable => {
    let na = "";
    try {
        airPressure.on("data", data => {
            clearInterval(na);
            na = setInterval(() => observable.next("N/A"), 1000);
            return observable.next(data.toFixed(2));
        })
    } catch (e) {
        observable.error(e);
    }
});

export const mainObservable = combineLatest(temp, humid, pressure, (t, h, p) => ({temperature: t, humidity: h, pressure: p}))
    .pipe(auditTime(100));

const emitTemp = multiplier => {
    const delay = Math.random() * multiplier;
    const temp = Math.random() * 36;
    temperature.emit("data", temp);
    setTimeout(() => emitTemp(multiplier), delay);
};
const emitHumidity = multiplier => {
    const delay = Math.random() * multiplier;
    const humid = Math.random() * 100;
    humidity.emit("data", humid);
    setTimeout(() => emitHumidity(multiplier), delay);
};
const emitAirPressure = multiplier => {
    const delay = Math.random() * multiplier;
    const pressure = Math.random() * 1000;
    airPressure.emit("data", pressure);
    setTimeout(() => emitAirPressure(multiplier), delay)
};

export default function (delay) {
    if (delay === undefined) delay = 2000;
    emitAirPressure(delay);
    emitHumidity(delay);
    emitTemp(delay);
}




