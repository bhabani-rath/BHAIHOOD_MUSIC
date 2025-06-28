require('dotenv').config();
const { YtDlpPlugin } = require("@distube/yt-dlp");

module.exports = {
    token: process.env.TOKEN,  // from .env

    cookies: {
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },

    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,

        plugins: [
            new YtDlpPlugin({
                update: true, // auto-updates yt-dlp
                cookies: "./src/config/cookies.txt" // Optional: remove if not using cookies
            })
        ]
    }
};
