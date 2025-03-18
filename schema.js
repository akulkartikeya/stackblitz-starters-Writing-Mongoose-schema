// schema.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ['user'], // Set a default role if needed
  },
  profile: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
      min: 0, // Optional: Add validation for age
    },
  },
  lastLogin: {
    type: Date,
  },
}, { timestamps: true }); // Optional: Adds createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);

module.exports = User;