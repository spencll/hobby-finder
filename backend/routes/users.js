const express = require('express');
const User = require('../models/user'); // Update the path to your User model
const Hobby = require('../models/hobby')
const router = express.Router();

//Param stuff

// Should be protected to only the logged in user. 
router.get('/:username', async (req, res) => {
    try {
      const { username } = req.params;
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
  
      res.send(user);
    } catch (error) {
      res.status(500).send({ message: 'Server error', error });
    }
})


// User registration
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Create hobby
router.post('/addHobby', async (req, res) => {
    try {
        const hobby = new Hobby(req.body);
        await hobby.save()
        res.status(201).send(hobby);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Find specific hobby
router.get('/:hobby', async (req, res) => {
    try {
      const hobby = await Hobby.findByHobby(req.params.name);
      res.json(hobby);
    } catch (err) {
      res.status(500).send(err);
    }
  });


router.post('/getHobby', async (req, res) => {
    const {name} = req.body
    try {
        const hobby = await Hobby.findOne({name});
        res.status(201).send(hobby);
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;

    