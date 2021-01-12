import React from "react";
import Event from "./Event.jsx";

const Day5Events = () => {
    const e1 = {
        title: "Event title day 5",
        description: "Event description blah blah blah",
        time: "Event time"
    }

    return (
        <div className="pt-3">
            <Event event={e1}></Event>
        </div>
    )
}

export default Day5Events;