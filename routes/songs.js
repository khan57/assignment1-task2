const router = require("express").Router();
const Song = require("../models/Song");

// @route        POST   songs/
// @description     dump songs to db
// @access          Public
router.post("/", async (req, res) => {
  try {
    const songs = [
      {
        name: "song-a",
        description: "song-A description Lorem ipsum dolor sit amet.",
      },
      {
        name: "song-b",
        description: "song-B description Lorem ipsum dolor sit amet.",
      },
      {
        name: "song-c",
        description: "song-C description Lorem ipsum dolor sit amet.",
      },
      {
        name: "song-d",
        description: "song-D description Lorem ipsum dolor sit amet.",
      },
      {
        name: "song-e",
        description: "song-E description Lorem ipsum dolor sit amet.",
      },
    ];
    new Promise((resolve, reject) => {
      songs.forEach(async (song, index) => {
        await new Song(song).save();
        if (songs.length - 1 === index) {
          resolve("all songs dumped intoDb");
        }
      });
    });

    res.json({ msg: "Songs saved to Db" });
  } catch (error) {
    console.log(error.message);
    res.json({ error: "some server error" });
  }
});

// @route        GET   songs/
// @description     dump songs to db
// @access          Public
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find({});
    res.status(200).json({ data: songs, error: null });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ data: null, error: "Some server error" });
  }
});

module.exports = router;
