import React from 'react';
import ReactTooltip from "react-tooltip";

export default function Triggers() {
    return (
        <>
            <div className="clickableTooltip">
                <button data-tip data-for="clickme" data-event="click">
                    Click me!
                </button>
                <ReactTooltip
                    id="clickme"
                    place="right"
                    effect="solid"
                    type="info"
                    clickable={true}
                >
                    <input type="text" placeholder="Type something..." />
                </ReactTooltip>
            </div>
        </>
    )
}