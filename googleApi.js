const fs = require("fs");
const { google } = require("googleapis");

const GOOGLE_API_FOLDER_ID = "1FZnRH2GLHwkzaEw61952ZoAU83Jmx-Bs";

async function uploadFile() {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: "./googlekey.json",
            scopes: ["https://www.googleapis.com/auth/drive"]
        });

        const driveService = google.drive({
            version: "v3",
            auth
        });

        const fileMetaData = {
            "name": "empleo2.jpg",
            "parents": [GOOGLE_API_FOLDER_ID]
        }

        const media = {
            mimeType: "image/jpg",
            body: fs.createReadStream("./empleo2.jpg")
        };

        const response = await driveService.files.create({
            resource: fileMetaData,
            media: media,
            field: "id"
        })
        return response.data.id
        
    } catch (error) {
        console.log("Upload file error", error)
        //throw error
    }
}

uploadFile().then(data => {
    console.log(data)
})