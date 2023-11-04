import React from "react";
import "./Card.css";


function Card(props) {
    return (

        <div>
                <div class="card">
                    <div class="innerCard">
                        <img src={props.imgURL} alt="horzion"/>
                        <div class="contentContainer">
            
                            <div class="gameTitle">{props.name}</div>
                            <div class="gameContent">
                                <strong>Genre:</strong><br/>
                                {props.genre}
                            </div>
            
                            
                            <div class="gameDes">
                                <strong>Release Date: </strong> <br/>
                                {props.release}
                                <br/>
                                <br/>
                                <strong>Platforms: </strong> <br/>
                                {props.platforms}
                                <br/>
                                <br/>
                                <strong>Developer: </strong> <br/>
                                {props.developer}
                            </div>           
                        </div>
                    </div>
                    <div class="borderAnim"></div>
                </div>       
        </div>
    )
}

export default Card;