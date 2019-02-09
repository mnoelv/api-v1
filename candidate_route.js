const express = require('express');
const Users = require('./candidate');

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
  let {office_id, party_id, candidate_id} = req.body;

  p.addUser(office_id, party_id, candidate_id);

  if (office_id === undefined) {
res.status(404).json({ error: 'Candidate name is missing!' });
    return;
  }

    res.status(200).json({ info: 'Candidate added Successfully!' });
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

userRouter.put('/:id', (req, res) => {
  let id = req.params.id;
  let { office_id, party_id, candidate_id } = req.body;
  p.updateUser(id, office_id, party_id, candidate_id);
  res.status(200).json({ info: 'Candidate modified successfully!' });
});

userRouter.delete('/:id', (req, res) => {
  let id = req.params.id;
  p.deleteUser(id);

  res.status(200).json({ info: 'Candidate deleted successfully!' });
});

module.exports = userRouter;
