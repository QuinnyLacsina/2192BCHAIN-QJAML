import React from "react";
import './MovieList.css';
import Megan from "../assets/Megan.jpg";
import AsAbove from "../assets/AsAbove.jpeg";
import Deleter from "../assets/Deleter.jpg";
console.log(Megan);
console.log(AsAbove);
console.log(Deleter);


export default class MovieList extends React.Component{
    render() {
        return(
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="card" >
                        <img src={Megan} class="card-img-top" alt="Megan"/>
                        <div class="card-body">
                            <h5 class="card-title">Megan</h5>
                            <p class="card-text">M3GAN is a marvel of artificial intelligence, a lifelike doll that's programmed 
                            to be a child's greatest companion and a parent's greatest ally.</p>
                            <a href="https://www.youtube.com/watch?v=BRb4U99OU80" class="btn btn-primary">View</a>
                        </div> 
                    </div>

                    <div class="card">
                        <img src={AsAbove} class="card-img-top" alt="AsAbove"/>
                        <div class="card-body">
                            <h5 class="card-title">As Above So Below</h5>
                            <p class="card-text">Archaeologist Scarlett Marlowe (Perdita Weeks) has devoted her whole life 
                            to finding one of history's greatest treasures: Flamel's Philosopher's Stone.</p>
                            <a href="https://www.youtube.com/watch?v=X_BaqNzdGXY" class="btn btn-primary">View</a>
                        </div> 
                    </div>

                    <div class="card">
                        <img src={Deleter} class="card-img-top" alt="Deleter"/>
                        <div class="card-body">
                            <h5 class="card-title">Deleter</h5>
                            <p class="card-text">An online content moderator deletes a suicide video made by her co-worker, 
                            but the otherwise desensitized woman can't escape her own troubled past or a mysterious vengeful presence.</p>
                            <a href="https://www.youtube.com/watch?v=nw27H5IKJLk" class="btn btn-primary">View</a>
                        </div> 
                    </div>
                </div>
                
            </div>
        );
    }
}