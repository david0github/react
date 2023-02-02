import React, {Component} from 'react'
import Card from './CardUI';

import img1 from "../assets/manager.jpg";
import img2 from "../assets/operator.jpg";

class Cards extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-4">
                    <Card imgsrc={img1} title="Parker Hannifin: Manager" />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="Parker Hannifin: Operator" />
                </div>
            </div>
        );
    }
}

export default Cards;