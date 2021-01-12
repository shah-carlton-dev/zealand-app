import React from "react";
import Event from "./Event.jsx";

const Day1Events = () => {

    const e1 = {
        title: "Day 1 Event 1",
        description: "Description for event here - Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "7-9pm"
    }

    const e2 = {
        title: "Day 1 Event 2",
        description: "Description for second event here - Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "9:30-11pm"
    }

    return (
        <div className="pt-3">
            <Event event={e1}></Event>
            <Event event={e2}></Event>
        </div>
    )
}

export default Day1Events;