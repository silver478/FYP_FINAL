import React from "react";
import App from "./App"
import Font_1 from './Font_1';
import Font_2 from './Font_2';
class Home extends React.Component{

    constructor(){
        super()
        this.state = {
            Current_mood: "Neutral"}
      
}
h

render(){

    if(this.state.Current_mood="Neutral"){

    return(
       
        <div>
            <div>
                <h1>{this.state.Current_mood}</h1>
            </div>
        <App parentCallback = {this.handleCallback}/>
        <Font_1/>
        
    </div>
    
    )}
}


}
export default Home;