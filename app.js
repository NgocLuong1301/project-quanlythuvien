const express = require("express");
const cors = require("cors");
const db = require("./config/db");

// Import routes
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");
const categoryRoutes = require("./routes/categories");
const publisherRoutes = require("./routes/publishers");

const app = express();

app.use(cors());
app.use(express.json());

// khai báo tất cả các routes ở đây
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/publishers", publisherRoutes);

app.listen(3000, () => {
  console.log("Server running...");
});
