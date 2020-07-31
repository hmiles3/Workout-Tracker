const router = require("express").Router();
const Workout = require("../models/workout.js");
var path = require("path");

 // If no matching route is found default to home
 router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


router.get("/api/workouts/range", ({ body }, res) => {
  Workout
  .find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", ({ body }, res) => {
  Workout
  .find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({params,body}, res) => {
  console.log("inside put request"+params.id)
  console.log(body)
  Workout.findByIdAndUpdate(
    {_id:params.id},
    {$push:{"exercises": body}}, 
    function(err, result){

    if(err){
        res.send(err)
    }
    else{
        res.send(result)
    }

})
});
router.post("/api/workouts", ({ body }, res) => {
  Workout.create({})
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
