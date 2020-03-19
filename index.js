import * as state from "./store";
import {StateSubject} from "./StateSubject"
import {StateObserver} from "./StateObserver"

const appState = new StateSubject(state.Home);
const pages = [];
pages.push(new StateObserver(appState, state.Bio));
pages.push(new StateObserver(appState, state.Form));
pages.push(new StateObserver(appState, state.Gallery));
pages.push(new StateObserver(appState, state.Home));

appState.setState(state.Home);
