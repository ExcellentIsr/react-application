import { CSSProperties, useEffect, useState } from "react"
import timeZones from "../time-zones/time-zones";
type Props = {
    date: Date;
    city: string;
}
export const Clock: React.FC<Props> = ({date, city}) => {
    const style: CSSProperties = { display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "cursive", fontSize: 22 };
    const timeZone: string|undefined = timeZones.find(tz => JSON.stringify(tz).includes(city))?.name ? timeZones.find(tz => JSON.stringify(tz).includes(city))?.name : undefined;
    const time = date.toLocaleTimeString("en-ES", {timeZone});
    return <div style={style}>
        <header>
            Time in {city}
        </header>
        <p>{time}</p>
    </div>
}