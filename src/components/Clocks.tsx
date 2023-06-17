import { useEffect, useState } from "react";
import { Clock } from "./Clock";

const Clocks: React.FC = () => {
    
    const places = ["Yekaterinburg", "Detroit", "Moscow", "German"];  
   
    const [date, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: 50}}>
        {/* //${places.map((place) => `<Clock date=${date} city=${place} />`} */}
        <Clock date={date} city={places[0]} />
        <Clock date={date} city={places[1]} />
        <Clock date={date} city={places[2]} />
        <Clock date={date} city={places[3]} />
    </div>
}
function getGmtTime(offset: number) {
    return new Date(Date.now() - (offset * 60 * 100));
}
export default Clocks;