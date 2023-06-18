import { CSSProperties } from "react"
import timeZones from "../time-zones/time-zones";
type Props = {
    date: Date;
    place: string;
}
export const Clock: React.FC<Props> = ({ date, place }) => {
    const style: CSSProperties = { display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "cursive", fontSize: 22 };
    const currentLocation = date.toString().substring(35, 42);

    const timeZone: string | undefined = timeZones.find(timeZone => JSON.stringify(timeZone).includes(place))?.name;
    const time = date.toLocaleTimeString("en-US", { timeZone });
    console.log(timeZone);

    return <div style={style}>
        <header>
            Time in {timeZone ? place : currentLocation}
        </header>
        <p>{time}</p>
    </div>
}