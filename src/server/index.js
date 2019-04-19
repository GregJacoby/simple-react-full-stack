const express = require('express');
const os = require('os');
const upload = require("./upload");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.post("/upload", upload);



app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
