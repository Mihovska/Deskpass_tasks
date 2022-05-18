import React from "react";
import ReactTooltip from "react-tooltip";

export default function Positions() {
    return (
        <>
            <div className="hovered">
                <h4>Floating tooltip triggered on mouse hover</h4>
                <a
                    href="#"
                    data-tip="Hovered link"
                    data-for="hovered-link"
                >
                    Hover over me
                </a>
                <ReactTooltip id="hovered-link" />
                <h4>Tooltips on different positions</h4>
                <a
                    href="#"
                    data-tip="Top position"
                    data-for="top"
                >
                    Top position
                </a>
                <ReactTooltip
                    id="top"
                    place="top"
                    effect="solid"
                />
                <br/><br/>
                <a href="#"
                   data-tip="Right position"
                   data-for="right"
                >
                    Right position
                </a>
                <ReactTooltip
                    id="right"
                    place="right"
                    effect="solid"
                />
                <br/><br/>
                <a href="#"
                   data-tip="Left position"
                   data-for="left"
                >
                    Left position
                </a>
                <ReactTooltip
                    id="left"
                    place="left"
                    effect="solid"
                />
                <br/><br/>
                <a href="#"
                    data-tip="Bottom position"
                   data-for="bottom"
                >
                    Bottom position
                </a>
                <ReactTooltip
                    id="bottom"
                    place="bottom"
                    effect="solid"
                />
            </div>
        </>
    )
}