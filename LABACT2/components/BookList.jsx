import React from "react";
import './BookList.css';
import AtomicHabits from "../assets/AtomicHabits.jpg";
import Heartstopper from "../assets/Heartstopper.jpeg";
import BookLover from "../assets/BookLover.jpg";
console.log(AtomicHabits);
console.log(Heartstopper);
console.log(BookLover);

export default function BookList() {
    return(
        <div>
            <div class="row justify-content-center">
                    <div class="card" >
                        <img src={AtomicHabits} class="card-img-top" alt="MegaAtomicHabitsn"/>
                        <div class="card-body">
                            <h5 class="card-title">Book Lover</h5>
                            <p class="card-text">A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.</p>
                        </div> 
                    </div>

                    <div class="card">
                        <img src={Heartstopper} class="card-img-top" alt="Heartstopper"/>
                        <div class="card-body">
                            <h5 class="card-title">Atomic Habits</h5>
                            <p class="card-text">“The Heartstopper Series” is a four series book that follows Nick and Charlie as they go through life and relationships.</p>
                        </div> 
                    </div>

                    <div class="card">
                        <img src={BookLover} class="card-img-top" alt="BookLover"/>
                        <div class="card-body">
                            <h5 class="card-title">Heartstopper</h5>
                            <p class="card-text">The popular BookTok hashtag on TikTok is a space for book lovers to discuss their favorite authors and reads. </p>
                        </div> 
                    </div>
                </div>
                
        </div>
    );
}