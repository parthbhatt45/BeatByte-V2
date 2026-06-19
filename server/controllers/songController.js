const Song = require("../models/Song");

const getSongs = async (req, res) => {
    try {
        const songs = await Song.find();

        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const createSong = async (req, res) => {
    try {
        const song = await Song.create(req.body);

        res.status(201).json(song);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getSongs,
    createSong,
};