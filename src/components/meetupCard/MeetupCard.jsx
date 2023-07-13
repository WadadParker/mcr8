import styles from "./meetupCard.module.css";
import { useNavigate } from "react-router-dom";

export const MeetupCard=({item})=>
{
    const navigate=useNavigate();
    return (
        <div className={styles[`card-container`]} onClick={()=>navigate(`/event/${item.id}`)}>
            <label className={styles.event}>{item.eventType}</label>
            <img src={item?.eventThumbnail} alt="event thunbail" className={styles.img}/>
            <small> {new Date(item?.eventStartTime).toLocaleString("en-us", {
                        day: "numeric",
                        year: "numeric",
                        month: "short",
                        hour: "numeric",
                        minute: "numeric"
                    })}
            </small>
            <strong>{item?.title}</strong>
        </div>
    )
}