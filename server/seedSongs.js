const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Song = require("./models/Song");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const songs = [
    {
        title: "Agar Tum Saath Ho",
        artist: "Alka Yagnik, Arijit Singh",
        coverImage:
            "https://c.saavncdn.com/994/Tamasha-Hindi-2015-500x500.jpg",
        audioUrl: "/audio/agar-tum-saath-ho.mp3",
    },
    {
        title: "Apna Bana Le",
        artist: "Arijit Singh",
        coverImage:
            "https://a10.gaanacdn.com/gn_img/albums/a7LWBzWzXA/LWBkVVA4bz/size_m_1686735322.jpg",
        audioUrl: "/audio/apna-bana-le.mp3",
    },
    {
        title: "Bairan",
        artist: "Sumit and Anuj",
        coverImage:
            "https://c.saavncdn.com/238/Bairan-Unknown-2026-20260223182954-500x500.jpg",
        audioUrl: "/audio/bairan.mp3",
    },
    {
        title: "Bandhu 2.0",
        artist: "Kavita Seth and Neeraj Shridhar",
        coverImage:
            "https://c.saavncdn.com/465/Bandhu-2-0-From-Cocktail-2-Hindi-2026-20260617174900-500x500.jpg",
        audioUrl: "/audio/bandhu-2.mp3",
    },
    {
        title: "Chunnari Chunnari",
        artist: "Abhijeet Bhattacharya",
        coverImage:
            "https://pulse.tips.in/assets/e2786fee-d458-420b-a13e-47f061825b71?width=600&height=600",
        audioUrl: "/audio/chunnari-chunnari.mp3",
    },
    {
        title: "Jaan Nisaar",
        artist: "Arijit Singh",
        coverImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAiM3VVsZT1SAPEZREkTUcJWlBfLAIX53aA&s",
        audioUrl: "/audio/jaan-nisaar.mp3",
    },
    {
        title: "Khat",
        artist: "Navjot Ahuja",
        coverImage:
            "https://c.saavncdn.com/901/Khat-Piano-Cover-Hindi-2026-20260302112755-500x500.jpg",
        audioUrl: "/audio/khat.mp3",
    },
    {
        title: "Maiyya Mainu",
        artist: "Sachet Tandon",
        coverImage:
            "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/07/22/2f/07222fa6-23d1-f419-affb-37ed30f46959/840214437809.png/600x600cc.webp",
        audioUrl: "/audio/maiyya-mainu.mp3",
    },
    {
        title: "Makhna",
        artist: "Tanishk Bagchi",
        coverImage:
            "https://i.scdn.co/image/ab67616d0000b2736517397a260f3713685c6b3a",
        audioUrl: "/audio/makhna.mp3",
    },
    {
        title: "Sooraj Dooba Hain",
        artist: "Arijit Singh",
        coverImage:
            "https://m.media-amazon.com/images/I/61HPpWaw7gL._UXNaN_FMjpg_QL85_.jpg",
        audioUrl: "/audio/sooraj-dooba-hain.mp3",
    },
    {
        title: "Tainu Leke",
        artist: "Sonu Nigam and Mahalakshmi Iyer",
        coverImage:
            "https://c.saavncdn.com/082/Salaam-E-Ishq-Hindi-2007-20230922144216-500x500.jpg",
        audioUrl: "/audio/tainu-leke.mp3",
    },
];

const importSongs = async () => {
    try {
        await Song.deleteMany();

        await Song.insertMany(songs);

        console.log("Songs Added Successfully");

        process.exit();
    } catch (error) {
        console.error(error);

        process.exit(1);
    }
};

importSongs();