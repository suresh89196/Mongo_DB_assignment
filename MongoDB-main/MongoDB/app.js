import express from "express"
import mongoose from "mongoose"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import methodOverride from "method-override"
import personRoutes from "./routes/personRoutes.js"

// Get current directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Initialize express app
const app = express()
const PORT = process.env.PORT || 3000

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/personDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err))

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(join(__dirname, "public")))
app.use(methodOverride("_method")) // For handling PUT and DELETE requests from forms

// Set view engine
app.set("view engine", "ejs")
app.set("views", join(__dirname, "views"))

// Routes
app.use("/person", personRoutes)

// Home route
app.get("/", (req, res) => {
  res.redirect("/person")
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
