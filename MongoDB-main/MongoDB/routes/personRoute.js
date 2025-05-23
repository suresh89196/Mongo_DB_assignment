import express from "express"
import Person from "/models/Person.js"

const router = express.Router()

// GET /person - Display all people
router.get("/", async (req, res) => {
  try {
    const people = await Person.find().sort({ createdAt: -1 })
    res.render("index", { people, error: null })
  } catch (error) {
    res.status(500).render("index", {
      people: [],
      error: "Error fetching people: " + error.message,
    })
  }
})

// GET /person/new - Display form to create a new person
router.get("/new", (req, res) => {
  res.render("new", { person: {}, error: null })
})

// POST /person - Create a new person
router.post("/", async (req, res) => {
  try {
    const newPerson = new Person(req.body)
    await newPerson.save()
    res.redirect("/person")
  } catch (error) {
    res.status(400).render("new", {
      person: req.body,
      error: "Error creating person: " + error.message,
    })
  }
})

// GET /person/:id/edit - Display form to edit a person
router.get("/:id/edit", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id)
    if (!person) {
      return res.status(404).render("error", { message: "Person not found" })
    }
    res.render("edit", { person, error: null })
  } catch (error) {
    res.status(500).render("error", { message: "Error fetching person: " + error.message })
  }
})

// PUT /person/:id - Update a person
router.put("/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!person) {
      return res.status(404).render("error", { message: "Person not found" })
    }

    res.redirect("/person")
  } catch (error) {
    const person = await Person.findById(req.params.id)
    res.status(400).render("edit", {
      person: person || req.body,
      error: "Error updating person: " + error.message,
    })
  }
})

// GET /person/:id/delete - Display delete confirmation
router.get("/:id/delete", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id)
    if (!person) {
      return res.status(404).render("error", { message: "Person not found" })
    }
    res.render("delete", { person })
  } catch (error) {
    res.status(500).render("error", { message: "Error fetching person: " + error.message })
  }
})

// DELETE /person/:id - Delete a person
router.delete("/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id)
    if (!person) {
      return res.status(404).render("error", { message: "Person not found" })
    }
    res.redirect("/person")
  } catch (error) {
    res.status(500).render("error", { message: "Error deleting person: " + error.message })
  }
})

export default router
