const router = require('express').Router();
const Users = require('./users-model.js');

router.get('/', (req, res) => {
 Users.find()
 .then(users => {
     res.json(users);
 })
 .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    Users
    .getUser(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => {
        res.status(500).json({ message: 'Failed to get User', err });
      });
})


router.post('/', (req, res) => {
    const userData = req.body;
    Users
    .add(userData)
    .then(user => {
      res.status(201).json(user);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new User' });
    });
  });

  router.put('/:id', (req,res) =>{
    const userData = req.body;
    Users
    .update(userData, req.params.id)
    .then(user=>{
        res.status(200).json(user);
    })
    .catch(err=>{
        res.status(500).json({ message: 'Failed to update User'})
    })
  })

router.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: "The User has been deleted."
        });
      } else {
        res.status(404).json({
          message: "The User could not be found."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Error deleting the User."
      });
    });
});
module.exports = router;