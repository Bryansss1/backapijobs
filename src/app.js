const express = require("express");
const expressFileUpLoad = require("express-fileupload");
const cors = require("cors");
const db = require("../src/utils/database");
const morgan = require("morgan");
const RoutesApp = require("./routes/index");
const fileUpload = require("express-fileupload");

const app = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
app.use(cors());
app.use(morgan("tiny"));

RoutesApp(app);

db.authenticate()
  .then(() => console.log("Database autenticada"))
  .catch((error) => console.log(error));

//alter true si existe? la tabla y es diferente al modelo? se actualiza

db.sync({alter:true})
.then(()=>console.log("Database sincronizada"))
.catch((error)=>console.log(error))


/* 
const sendEmail=async()=>{
    transporter.sendMail({
        from:"vaquero ballin:3",
        to:"bryanvolkov15@gmail.com",
        subject:"CHUPAME LAS BOLASS",
        text:"culiar uwu",
        html:"<h1>Hola uwu estoy probando este script para enviar correos spam ñia entra al link para que veas algo bello</h1> <a href=https://www.youtube.com/watch?v=hn5OXlUZtmE>aqui papu:v:v:v</a>"
    })
}
sendEmail()
*/

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my server" });
});

module.exports = app;
