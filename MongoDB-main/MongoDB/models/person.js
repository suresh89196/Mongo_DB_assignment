import mongoose from "mongoose"

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [0, "Age cannot be negative"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["Male", "Female", "Other"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [/^\d{10}$/, "Please enter a valid 10-digit mobile number"],
    },
  },
  {
    timestamps: true,
  },
)

const Person = mongoose.model("Person", personSchema)

export default Person
