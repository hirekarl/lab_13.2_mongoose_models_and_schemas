const express = require("express")
const router = express.Router()

const Book = require("../models/Book")

// Utility
const handle400 = (res, error) => {
  console.error(error)
  res.status(400).json({ error: "There was a problem with your request!" })
}

// Route: Create
router.post("/", async (req, res) => {
  const bookToCreate = req.body
  try {
    const newBook = await Book.create(bookToCreate)
    res.status(201).json(newBook)
  } catch (error) {
    handle400(res, error)
  }
})

// Route: Read All
router.get("/", async (_req, res) => {
  try {
    const allBooks = await Book.find({})
    res.json(allBooks)
  } catch (error) {
    handle400(res, error)
  }
})

// Route: Read One
router.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const bookAtId = await Book.findById(id)
    res.json(bookAtId)
  } catch (error) {
    handle400(res, error)
  }
})

// Route: Update
router.put("/:id", async (req, res) => {
  const id = req.params.id
  const updatedFields = req.body
  try {
    await Book.findByIdAndUpdate(id, updatedFields, { new: true })
    res.sendStatus(204)
  } catch (error) {
    handle400(res, error)
  }
})

// Route: Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id
  try {
    await Book.findByIdAndDelete(id)
    res.sendStatus(204)
  } catch (error) {
    handle400(res, error)
  }
})

module.exports = router
