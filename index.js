//import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import {StateSubject} from "./StateSubject"
import {StateObserver} from "./StateObserver"

const appState = new StateSubject(state.Home);
const pages = [];
pages.push(new StateObserver(appState,state.Bio));
pages.push(new StateObserver(appState,state.Form));
pages.push(new StateObserver(appState,state.Gallery));
pages.push(new StateObserver(appState,state.Home));

appState.setState(state.Home);

/*function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${pages.map(page => page.render()).join('')}
  ${Footer()}
`;
  addNavEventListeners();
  addPicOnFormSubmit(st);
}

render();*/

/*function addNavEventListeners() {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      appState.setState(state[event.target.title]);
      render(state[event.target.title]);
    })
  );
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

function addPicOnFormSubmit(st) {
  if (st.view === "Form") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      // construct new picture object
      let newPic = inputList.reduce((pictureObject, input) => {
        pictureObject[input.name] = input.value;
        return pictureObject;
      }, {});
      // add new picture to state.Gallery.pictures
      state.Gallery.pictures.push(newPic);
      render(state.Gallery);
    });
  }
} */
