const express = require("express");
const router = express.Router();
const foodModel = require("../src/models/food");

router.post("/foods", async (req, res) => {
  let response = {
    status: false,
  };
  try {
    let body = req.body;
    let foodObj = new foodModel(body);
    foodObj
      .save()
      .then((doc) => {
        response.status = true;
        response.message = "Food added successfully";
        res.status(200).json(response);
      })
      .catch((err) => {
        response.message = "Food not added";
        response.error = err;
        res.send(response);
      });
  } catch (err) {
    response.message = "Something went wrong";
    response.error = err;
    res.send(err);
  }
});

router.get("/foods", async (req, res) => {
  let response = {
    status: false,
  };
  try {
    const foodData = await foodModel.find({});
    response.status = true;
    res.status(200).json(foodData);
  } catch (err) {
    response.message = "Something went wrong";
    res.status(500).json(err);
  }
});

router.get('/food/:id',async ( req,res) => {

    let {id} = req.params.id;
     id = new ObjectId(id);
    // console.log(id);
    let response = {status: false};
    foodModel
    .findById(id)
    .then((doc) => {
      response.status = true;
      response.data = doc;
      res.send(response);
    })
    .catch((err) => {
      response.error = err;
      res.send(response);
    });
});


router.delete('/foods/:id', async(req,res) => {
  let response = {status: false};
    const id = req.params.id;
    console.log(id);
    foodModel
    .deleteOne({_id: id})
    .then((doc) => {
      response.status = true;
      response.data = doc;
      res.send(response);
    })
    .catch((err) => {
      response.error = err;
      res.send(response);
    });
});

module.exports = router;
