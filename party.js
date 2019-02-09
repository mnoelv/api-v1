const express = require('express');
const Users = require('./parties');


const p = new Users();
const userRouter = express.Router();



userRouter.get('/', (req, res) => {
res.json(p.getUsers());
});





userRouter.get('/:id', (req, res) => {
let id = req.params.id;
res.json(p.getUsersb(id));
});




userRouter.post('/', (req, res) => {
  let { p_name, p_adress, image_logo } = req.body;

  p.addUser(p_name, p_adress, image_logo);

  if (p_name === undefined) {
    res.json({ error: 'party name is missing!' });
    return;
  }

  res.json({ info: 'party added Successfully!' });
});





userRouter.put('/:id', (req, res) => {
  let id = req.params.id;
  let { p_name, p_adress, image_logo } = req.body;
  p.updateUser(id, p_name, p_adress, image_logo);
  res.json({ info: 'party modified successfully!' });
});

userRouter.delete('/:id', (req, res) => {
  let id = req.params.id;
  p.deleteUser(id);

  res.json({ info: 'party deleted successfully!' });
});

module.exports = userRouter;
