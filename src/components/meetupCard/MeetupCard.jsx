import styles from "./meetupCard.module.css";

export const MeetupCard=({item})=>
{
    return (
        <div>
            <img src={item?.eventThumbnail} alt="event thunbail" />
        </div>
    )
}