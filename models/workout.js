const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises:[ 
    {
      type: {
        type: String,
        required: "Enter workout type"
      },
      name: {
        type: String,
        required: "Enter workout name"
      },
      duration: {
        type: Number,
        required: "Enter workout duration"
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
  }
  ],
 
  day: {
    type: Date,
    default: Date.now
  },
  
});

workoutSchema.methods.totalDuration = function() {
 // this.username = `${this.username}...the Coolest!`;
  return "0";
};


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
