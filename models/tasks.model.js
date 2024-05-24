const mongoose = require("mongoose");

// initializing a simple mongoose Schema to represent the products
const TaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter task name"],
    },

    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Tasks = mongoose.model("Tasks", TaskSchema);

module.exports = { Tasks };