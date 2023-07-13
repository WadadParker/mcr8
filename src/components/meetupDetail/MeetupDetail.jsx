import styles from "./meetupDetail.module.css";

import { useContext } from "react";

import { MeetupContext } from "../../context/MeetupContext";
import {Modal} from "../../components/modal/Modal";

export const MeetupDetail=({item})=>
{
    const {state,dispatch}=useContext(MeetupContext);
    const {meetups,search,showModal,rsvp}=state;

    const currentDate= new Date();


    return ( <>
                {showModal && <Modal />}
        <div className={styles[`details-container`]}>
            <header className={styles[`main-details-container`]}>
                <h1>{item?.title}</h1>
                <small>Hosted By:</small>
                <strong>{item?.hostedBy}</strong>
                <img src={item?.eventThumbnail} alt="eventThumbnail" width={300} height={200} />
                <h2>Details:</h2>
                <p>{item?.eventDescription}</p>
                <h2>Additional Information</h2>
                <span>
                    <strong>Dress Code: </strong>
                    {item?.additionalInformation?.dressCode}
                </span>
                <span>
                    <strong>Age Restrictions: </strong>
                    {item?.additionalInformation?.ageRestrictions}
                </span>
                <h2>Event Tags: </h2>
                <footer>
                    {item?.eventTags.map(name=>
                        (
                            <span className={styles.tag}>{name}</span>
                        ))}
                </footer>
            </header>

            <main >
                <article className={styles.article}>
                    <main>
                    <strong>Time: </strong>
                    <br />
                        <span>
                        {new Date(item?.eventStartTime).toLocaleString("en-us", {
                            day: "numeric",
                            year: "numeric",
                            month: "short",
                            hour: "numeric",
                            minute: "numeric"
                        })} to 
                        </span>
                        <br />
                        <span>
                        {new Date(item?.eventEndTime).toLocaleString("en-us", {
                            day: "numeric",
                            year: "numeric",
                            month: "short",
                            hour: "numeric",
                            minute: "numeric"
                        })}
                        </span>
                        <br />
                        </main>
                        <main>
                    <strong>Location</strong>   
                    <br /> 
                    <span>{item?.location}</span>
                    <br />
                    <span>{item?.address}</span>
                    <br/>
                    </main>
                    <span>Rs {item?.price}</span>
                </article>

                <footer>
                    <h2>Speakers: ({item?.speakers.length})</h2>
                    <ul className={styles[`speaker-container`]}>
                        {item?.speakers.map((item,index)=>(
                            <li key={index} className={styles[`speakers`]}>
                                <img src={item.image} width={50} height={50} alt="pfp" />
                                <strong>{item.name}</strong>
                                <span>{item.designation}</span>
                            </li>
                        ))}
                    </ul>
                </footer>
                <button className={styles.tag} disabled={rsvp} onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:true})}>{rsvp?"Already RSVPed":"RSVP"}</button>
            </main>
        </div>
        </>
    )
}