import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Please select a song</div>;
  }

  return (
    <div>
      <h3>Detail for:</h3>
      <p>
        Title: {song.title} <br />
        Artist: {song.artist}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
