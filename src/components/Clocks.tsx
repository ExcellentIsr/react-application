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
        {places.map((place, index) => 
            <Clock key={index} date={date} place={place} />
        )}
    </div>
}
export default Clocks;