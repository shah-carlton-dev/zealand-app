import React from "react";
import Event from "./Event.jsx";


const Day2Events = () => {

    const e1 = {
        title: "Event title",
        description: "Event description blah blah blah",
        time: "Event time"
    }

    return (
        <div className="pt-3">
            <Event event={e1}></Event>
        </div>
    )
}

export default Day2Events;