const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = require("./app/models");
const Role = db.role;

// db.sequelize.sync({force: true}).then(()=>{
//     console.log("Drop and Resync Db");
//     initial();
// });

// const db = require("./app/models");
db.sequelize.sync();


app.get("/", (req,res)=> {
    res.json({message: "Welcome to devhunt application"});
})

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/updateUser')(app);
require('./app/routes/deleteUser')(app);
require('./app/routes/forum/question/createQuestion')(app);
require('./app/routes/forum/question/updateQuestion')(app);
require('./app/routes/forum/question/deleteQuestion')(app);
require('./app/routes/forum/question/findAllQuestions')(app);
require('./app/routes/forum/question/getQuestion')(app);
require('./app/routes/forum/response/createResponse')(app);
require('./app/routes/forum/response/updateResponse')(app);
require('./app/routes/forum/response/deleteResponse')(app);
require('./app/routes/forum/response/findAllResponses')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

// const initial = () => {
//     Role.create({
//         id: 1,
//         name: "user"
//     });
//     Role.create({
//         id: 2,
//         name: "moderator"
//     });
//     Role.create({
//         id: 3,
//         name: "admin"
//     });
// } 