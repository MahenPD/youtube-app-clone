import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div class="searchPage">
        <div class="searchPage__filter">
          <TuneOutlinedIcon />
          <h2>FILTER</h2>
        </div>
      </div>
      <hr />

      {/* <ChannelRow image Channel verified subs noOfVideos descriptions /> */}
      <hr />

      <VideoRow />
    </div>
  );
}

export default SearchPage;
