import styles from "./home.module.css";
import logo from "../../assets/meetup.svg";
import { useContext } from "react";

import { MeetupContext } from "../../context/MeetupContext";
import {MeetupCard} from "../../components/meetupCard/MeetupCard";

export const Home=()=>
{
    const {state,dispatch,sortMeetups}=useContext(MeetupContext);
    const {meetups,search,sort}=state;
    return (
        <div>
            <nav className={styles.nav}>
                <img src={logo} width={100} height={100} />
                <input type="search" placeholder="seach by title and tags" value={search} onChange={(e)=>dispatch({type:"SEARCH",payload:e.target.value})}/>
            </nav>
            <header className={styles.header}>
                <h1>Meetup Events</h1>
                <select value={sort} onChange={(e)=>dispatch({type:"SORT",payload:e.target.value})}>
                    <option value="both">Both</option>
                    <option value="Offline">Offline</option>
                    <option value="Online">Online</option>
                </select>
            </header>
            <ul className={styles[`list-container`]}>
                {sortMeetups().map(item=>(
                    <li className={styles[`list-item-container`]} key={item.id}>
                        <MeetupCard item={item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}