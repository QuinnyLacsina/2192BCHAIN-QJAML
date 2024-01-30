import React from "react";
import './biblequiz.css';

function Check(){
    return(
    <h4 class="color-correct">Correct!</h4>
    );
}

function Wrong(){
    return(
        <h4 class="color-wrong">Incorrect!</h4>
    );
}

function Quiz(props){
    const isCheck = props.isCheck;
    if(isCheck){
        return(
            <div>
                <h4>The Bible consists of the Old and New Testaments.</h4>
                <Check/>
                <h4>Moses led the Israelites out of Egypt.</h4>
                <Check/>
                <h4>The sermon on the Mount is found in the Book of Luke.</h4>
                <Wrong/>
            </div>
            
            );
    }
    return(
        <div>
            <h4>The Bible consists of the Old and New Testaments.</h4>
            <h4>Moses led the Israelites out of Egypt.</h4>
            <h4>The sermon on the Mount is found in the Book of Luke.</h4>
        </div>
    );
}


export default function App(){
    return(
        <div>
            <Quiz
                isCheck={false}/>
        </div>
        
    );
}