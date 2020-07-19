import React from "react";

export const Alert = (props) => (
    <div className="alert alert-warning" role="alert">
        {props.text}
    </div>
)