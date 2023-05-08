import React, {useState, useEffect} from "react";

    
export function MemoryCard(props) {

    const [clickedAmmount, setclickedAmmount] = useState(0);
    
    let [currentCollor, setCurrentCollor] = useState(props.color);


    

    function Increment(){
        if(clickedAmmount < 1){
            setclickedAmmount(clickedAmmount + 1);
            props.onBeingPressed();
        }
        else {
            setclickedAmmount(0);
            props.onWin();
            props.onBeingPressed();
        }
        
    }

    


    

    return (  <div className={currentCollor} style={{
        gridArea: props.id
    }}>
            <button onClick={Increment} >Not me !</button>
        </div>)
        

}