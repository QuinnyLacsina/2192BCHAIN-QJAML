import React from "react";

/*function ChildComponent(props){
    return(
        <div>
            <p>{props.message}</p>
        </div>
    );
}*/

class ChildComponent extends React.Component{
    render() {
        return(
            <div>
                <h2>{this.props.message}</h2>
            </div>
        );
    }
}

export default ChildComponent;