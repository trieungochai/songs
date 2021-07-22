const songsReducer = () => {
  return [
    { title: "Smells Like Teen Spirit", artist: "Nirvana" },
    { title: "Yesterday", artist: "The Beatles" },
    { title: "Seven Nation Army", artist: "The White Stripes" },
    { title: "Blowing In The Wind", artist: "Bob Dylan" },
    { title: "You Shook Me All Night Long", artist: "AC/DC" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
