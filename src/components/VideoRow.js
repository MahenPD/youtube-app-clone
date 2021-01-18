import React from "react";
import "./VideoRow.css";

function VideoRow(props) {
  const { views, subs, description, timestamp, channel, title, image } = props;

  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div class="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} .{" "}
          <span className="videoRow__subs">
            {" "}
            <span className="videoRow__subsNumber"> </span>{" "}
          </span>{" "}
          {subs} Subscribers {views} . {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
