import styles from "./eventDetail.module.css";
import logo from "../../assets/meetup.svg";

import { useParams } from "react-router-dom";
import { useContext } from "react";

import { MeetupContext } from "../../context/MeetupContext";
import { MeetupDetail } from "../../components/meetupDetail/MeetupDetail";

export const EventDetail=()=>
{
    const {state,dispatch}=useContext(MeetupContext);
    const {meetups,search}=state;
    const {eventID}=useParams();

    const foundMeetup=meetups.find(({id})=>id==eventID);

    return (
        <div>
            <nav className={styles.nav}>
                <img src={logo} width={100} height={100} />
                <input type="search" placeholder="seach by title and tags" value={search} onChange={(e)=>dispatch({type:"SEARCH",payload:e.target.value})}/>
            </nav>
            <MeetupDetail item={foundMeetup} />
        </div>
    )
}