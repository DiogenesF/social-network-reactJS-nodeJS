const express = require("express");
const connectDB = require("./config/db");

const authRouter = require("./routes/api/auth");
const postRouter = require("./routes/api/post");
const profileRouter = require("./routes/api/profile");
const usersRouter = require("./routes/api/users");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Working"));

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/posts", postRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
