import React, {useState} from "react";
import Heading, {add} from "./Heading";
import games from "./games";
import Card from "./Card";
import "./App.css";

const customStyle = {
    color: "blue",
    fontSize: "20px",
    border:"1px solid black"
  }
  
  customStyle.color = "green";
  

function createCard(game) {
    return <Card 
        key={game.id} 
        name={game.name} 
        imgURL={game.imgURL} 
        platforms={game.platforms} 
        release={game.release} 
        genre={game.genre}
        developer={game.developer}
        />
}


function App() {


    const [name, setName] = useState("");

    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    });

    function handleChange(event) {
        setName(event.target.value);
    }

    function changingName(event) {
        const inputName = event.target.name;

        if(inputName === "fName") {
            setFullName({fName: event.target.value});
        }
        else {
            setFullName({lName: event.target.value});
        }
    }



    const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(name.toLowerCase())
    );


    return (
        <div>
            <div>
            <Heading></Heading>
            {/* <Card 
            id="2"
            name="Gaem"
            release="2021"
            /> */}

            <input onChange={changingName} name="fName" type="text" placeholder="First Name"/>
            <input onChange={changingName} name="lName" type="text" placeholder="Last Name"/>

            <div>Hello {fullName.fName} {fullName.lName} </div>

            <input onChange={handleChange} type="text" placeholder="Search game"/>
            <div class="playstationExclusives">
                {filteredGames.map(createCard)}
            </div>

            {/* {filteredGames.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))} */}
            
            <div>{add(1,1)}</div>
            <h1 style={{color:"red"}}>GOOD MORNING</h1>
            <h2 style={customStyle}>GOOD MORNING</h2>


        
        </div>
        </div>
    );
}

export default App;