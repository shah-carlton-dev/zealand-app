import React from "react";
import Event from "../components/Event.jsx";

const Day4Events = () => {
    const e1 = {
        title: "Event title day4",
        description: "Event description blah blah blah",
        time: "Event time"
    }

    return (
        <div className="pt-3">
            <Event event={e1}></Event>
        </div>
    )
}

export default Day4Events;