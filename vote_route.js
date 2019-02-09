const express = require('express');
const Users = require('./vote');

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
  let {createdOn, createdBy, office, candidate} = req.body;

  p.addUser(createdOn, createdBy, office, candidate);

  if (createdOn === undefined) {
res.status(404).json({ error: 'voting date is missing!' });
    return;
  }

    res.status(200).json({ info: 'vote added Successfully!' });
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

userRouter.put('/:id', (req, res) => {
  let id = req.params.id;
  let { createdOn, createdBy, office, candidate } = req.body;
  p.updateUser(id, createdOn, createdBy, office, candidate);
  res.status(200).json({ info: 'vote modified successfully!' });
});

userRouter.delete('/:id', (req, res) => {
  let id = req.params.id;
  p.deleteUser(id);

  res.status(200).json({ info: 'vote deleted successfully!' });
});

module.exports = userRouter;
