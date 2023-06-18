import { useEffect, useState } from "react";
import { Clock } from "./Clock";

const Clocks: React.FC = () => {
    const places: string[] = ["Yekaterinburg", "WWWWWWW", "Detroit", "German"];  
    const [date, setTime] = useState<Date>(new Date());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: 50}}>
        {/* //${places.map((place) => `<Clock date=${date} city=${place} />`} */}
        <Clock date={date} place={places[0]} />
        <Clock date={date} place={places[1]} />
        <Clock date={date} place={places[2]} />
        <Clock date={date} place={places[3]} />
    </div>
}
export default Clocks;