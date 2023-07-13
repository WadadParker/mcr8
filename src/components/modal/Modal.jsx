import styles from "./modal.module.css";

import { useContext } from "react";
import { MeetupContext } from "../../context/MeetupContext";

export const Modal=()=>
{
    const {state,dispatch}=useContext(MeetupContext);
    const {input:{name}}=state;
    return (
        <div className={styles.modal}>
            
            <div className={styles[`modal-container`]}>
            <h2>Complete your RSVP</h2>
                {/* input fields */}
                <label htmlFor="name">Name</label>
                <input id="name" value={name} placeholder="Enter Name" onChange={(e)=>dispatch({type:"INPUT_FIELDS",payload:e.target.value,inputField:"name"})}></input> 

                <label htmlFor="email"> Email</label>
                <input id="email" placeholder="enter email" />
                <button onClick={()=>dispatch({type:"ADD"})}>RSVP</button>
                <button onClick={()=>dispatch({type:"CLEAR_INPUT"})}>Close</button>
            </div>
        </div>
    )
}