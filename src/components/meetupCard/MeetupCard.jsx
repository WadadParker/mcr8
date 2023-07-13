import styles from "./meetupCard.module.css";

export const MeetupCard=({item})=>
{
    return (
        <div className={styles[`card-container`]}>
            <label className={styles.event}>{item.eventType}</label>
            <img src={item?.eventThumbnail} alt="event thunbail" className={styles.img}/>
            <small>{new Date(item?.eventStartTime).toLocaleDateString("en-us", {
                    day: "numeric",
                    year: "numeric",
                    month: "short",
                    })}
            </small>
            <strong>{item?.title}</strong>
        </div>
    )
}