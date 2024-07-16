import React, { Component } from "react";
import JSON from './shop.json'
import ItemList from "./ItemList";


class Item extends Component{
    constructor(){
        super();
        this.state = {
            title : 'Item Page',
            item : JSON
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.title}</h2>
                <ItemList products={ this.state.item}/>
            </div>
        )
    }
}
export default Item;