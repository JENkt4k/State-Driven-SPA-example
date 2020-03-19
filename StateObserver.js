import * as views from "./components/views";
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
        // if(state.view == this.stateContext.view){
        //     this.stateContext.render();
        // }
    }

    render(){
        let result = '';
        if(this.active == true){
            result = `${views[this.stateContext.view](this.stateContext)}`;
        }
        return result; //this.active ? `${views[this.stateContext.view](this.stateContext)}` : ''
    }

}

//export default StateObserver;