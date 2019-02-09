const express = require('express');
const Users = require('./petition');

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
  let {createdOn, createdBy, office, body} = req.body;

  p.addUser(createdOn, createdBy, office, body);

  if (createdOn === undefined) {
res.status(404).json({ error: 'voting date is missing!' });
    return;
  }

    res.status(200).json({ info: 'petition added Successfully!' });
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

userRouter.put('/:id', (req, res) => {
  let id = req.params.id;
  let { createdOn, createdBy, office, body } = req.body;
  p.updateUser(id, createdOn, createdBy, office, body);
  res.status(200).json({ info: 'petition modified successfully!' });
});

userRouter.delete('/:id', (req, res) => {
  let id = req.params.id;
  p.deleteUser(id);

  res.status(200).json({ info: 'petition deleted successfully!' });
});

module.exports = userRouter;
