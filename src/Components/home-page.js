import React,{Component} from "react";

class ListofCharacters extends Component {

    constructor(){
        this.state = {characters : ['Jon','Ned']};
    }

    render(){
        this.state.map((x)=>{
            return <p>{x}</p>
        })
    }
}