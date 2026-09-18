import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Health check
app.get("/", (_req, res) => {
  res.json({
    message: "Node.js server is running",
    status: "OK"
  })
})

app.get("/api/health", (_req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})