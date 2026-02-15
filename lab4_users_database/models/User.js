const mongoose = require("mongoose");

const zipRegex = /^\d{5}-\d{4}$/;                 
const phoneRegex = /^\d-\d{3}-\d{3}-\d{4}$/;      
const cityRegex = /^[A-Za-z ]+$/;                 
const urlRegex = /^https?:\/\/.+/i;               
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true
    },
    username: {
      type: String,
      required: [true, "username is required"],
      minlength: [4, "username must be at least 4 characters"],
      maxlength: [100, "username must be at most 100 characters"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [emailRegex, "email must be valid"]
    },
    address: {
      street: { type: String, required: [true, "address.street is required"] },
      suite: { type: String, required: [true, "address.suite is required"] },
      city: {
        type: String,
        required: [true, "address.city is required"],
        trim: true,
        match: [cityRegex, "city must contain only alphabets and spaces"]
      },
      zipcode: {
        type: String,
        required: [true, "address.zipcode is required"],
        match: [zipRegex, "zipcode must be in format 12345-1234"]
      }
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
      match: [phoneRegex, "phone must be in format 1-123-123-1234"]
    },
    website: {
      type: String,
      required: [true, "website is required"],
      trim: true,
      match: [urlRegex, "website must start with http or https"]
    }
  },
  { collection: "users" }
);

// Helps return a nicer duplicate email error (E11000)
UserSchema.post("save", function (error, doc, next) {
  if (error?.code === 11000) {
    return next(new Error("email must be unique"));
  }
  next(error);
});

module.exports = mongoose.model("User", UserSchema);
