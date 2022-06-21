import React from "react";

class Card extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            
                <div class="card" >
                    <img class="card-img-top" src={this.props.i} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{this.props.title}</h5>
                            <p class="card-text">{this.props.b}</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                </div>  
        )
    }
}

export default Card;
