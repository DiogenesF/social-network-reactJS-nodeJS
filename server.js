const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const authRouter = require("./routes/api/auth");
const postRouter = require("./routes/api/post");
const profileRouter = require("./routes/api/profile");
const usersRouter = require("./routes/api/users");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/posts", postRouter);

//serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
