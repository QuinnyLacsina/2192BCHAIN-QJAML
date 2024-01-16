import React from "react";

export default class TodoList extends React.Component{
    render() {
        return(
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Todo List
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Clean Porch</a></li>
                    <li><a class="dropdown-item" href="#">Wash Car</a></li>
                    <li><a class="dropdown-item" href="#">Attend BCHAIN Classe</a></li>
                </ul>
                {/* <h1>Clean Porch</h1>
                <h1>Wash Car</h1>
                <h1>Attend BCHAIN Class</h1> */}
            </div>
        );
    }
}