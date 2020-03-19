import * as views from "./components/views";
import { Header, Nav, Main, Footer } from "./components";
import * as stateStore from "./store";

export class StateObserver{
    constructor(subject, stateContext){
        this.subject = subject;
        this.stateContext = stateContext;
        this.active = (subject.state.view == stateContext.view);
        subject.registerObserver(this);
    }

    notify(state){
        if(state.view == this.stateContext.view){
            this.active =  true;
        } else {
            this.active =  false;
        }
        this.render();
    }

    render(){
        //let result = '';
        if(this.active == true){
           // result = `${views[this.stateContext.view](this.stateContext)}`;
        //}
        //return result;
        document.querySelector("#root").innerHTML = `
        ${Header(this.stateContext)}
        ${Nav(stateStore.Links)}
        ${views[this.stateContext.view](this.stateContext)}
        ${Footer()}`;

        this.addNavEventListeners();
        this.addPicOnFormSubmit(this.stateContext);
        }
    }

    addNavEventListeners() {
        // add event listeners to Nav items for navigation
        document.querySelectorAll("nav a").forEach(navLink =>
          navLink.addEventListener("click", event => {
            event.preventDefault();
            this.subject.setState(stateStore[event.target.title]);
          })
        );
        // add menu toggle to bars icon in nav bar
        document
          .querySelector(".fa-bars")
          .addEventListener("click", () =>
            document.querySelector("nav > ul").classList.toggle("hidden--mobile")
          );
      }
      
      addPicOnFormSubmit(st) {
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
      }

}

//export default StateObserver;