const express = require("express");
const cors = require("cors");
const db = require("./config/db");

// Import routes
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");
const categoryRoutes = require("./routes/categories");
const publisherRoutes = require("./routes/publishers");
const borrowRequestRoutes = require("./routes/borrowRequest");
const borrowRoutes = require("./routes/borrow");
const dashboardRoutes = require("./routes/dashboard");
const uploadRoutes = require("./routes/upload");

const app = express();

app.use(cors());
app.use(express.json());

// khai báo tất cả các routes ở đây
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/publishers", publisherRoutes);
app.use("/api/borrow-requests", borrowRequestRoutes);
app.use("/api/borrows", borrowRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/upload", uploadRoutes);

app.listen(3000, () => {
  console.log("Server running...");
});
