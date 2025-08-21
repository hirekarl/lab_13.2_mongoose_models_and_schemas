const express = require("express")
const router = express.Router()

const Book = require("../models/Book")

router.use(express.json())

// Utility
const handle400 = (res, error) => {
  console.error(error)
  res.status(400).json({ error: "Bad Request", message: error })
}

// Create
router.post("/", async (req, res) => {
  const newBook = req.body
  try {
    await Book.create(newBook)
    const foundBook = await Book.find({ isbn: newBook.isbn })
    res.status(201).json(foundBook)
  } catch (error) {
    handle400(res, error)
  }
})

// Read All
router.get("/", async (_req, res) => {
  try {
    const allBooks = await Book.find({})
    res.json(allBooks)
  } catch (error) {
    handle400(res, error)
  }
})

// Read One
router.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const bookAtId = Book.findById(id)
    res.json(bookAtId)
  } catch (error) {
    handle400(res, error)
  }
})

// Update
router.put("/:id", async (req, res) => {
  const id = req.params.id
  const updatedFields = req.body
  try {
    await Book.findByIdAndUpdate(id, updatedFields, { new: true })
    res.status(204)
  } catch (error) {
    handle400(res, error)
  }
})

// Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id
  try {
    await Book.findByIdAndDelete(id)
    res.status(204)
  } catch (error) {
    handle400(res, error)
  }
})

module.exports = router
