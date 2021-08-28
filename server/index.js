const express = require("express");
const app = express();
const path = require("path");

app.set('etag', false);
const options = { etag: false };

app.use(express.static("client/build", options));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);