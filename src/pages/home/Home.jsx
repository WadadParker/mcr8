import styles from "./home.module.css";
import { useContext } from "react";

import { MeetupContext } from "../../context/MeetupContext";

export const Home=()=>
{
    const {state,dispatch}=useContext(MeetupContext);
    const {meetups}=state;
    return (
        <div>
            This is Home
        </div>
    )
}