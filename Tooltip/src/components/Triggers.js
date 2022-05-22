import React from 'react';
import ReactTooltip from "react-tooltip";

export default function Triggers() {
    return (
        <>
            <div className="triggers">

                {/* a tooltip triggered on mouse click with `clickable` prop */}
                {/* so tooltip can respond to mouse(or touch) events */}

                <h4>Example of a clickable tooltip</h4>
                <button
                    data-tip
                    data-for="clickme"
                    data-event="click"
                >
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

                {/* a tooltip triggered on mouse hover and set to custom color with bottom position */}
                <h4>Custom colors</h4>
                <a
                    href="#"
                    data-tip="Lovely color"
                    data-for="custom-color"
                >
                    Tooltip with a nice color
                </a>
                <ReactTooltip
                    id="custom-color"
                    place="bottom"
                    textColor="#5F4B8BFF"
                    backgroundColor="#E69A8DFF"
                    effect="solid"
                />
            </div>
        </>
    )
}