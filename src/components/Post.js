import React from "react";

export default (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
            </div>
        </div>
    )
}