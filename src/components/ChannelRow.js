import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChannelRow.css";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow(props) {
  const { image, channel, verified, subs, noOfVideos, description } = props;

  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div class="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>

        <p>
          {subs} subscribers {noOfVideos} videos{" "}
        </p>
      </div>
    </div>
  );
}

export default ChannelRow;
