const getAllUsers = (req, res) => {
  res.json("Retrieved user list");
};

const getOneUserByName = (req, res) => {
  const { name } = req.params;
  res.json(`Retrieved user ${name}`);
};

const createUser = (req, res) => {
  const { name } = req.body;
  res.json(`Created user ${name}`);
};

const updateUserByName = (req, res) => {
  const { name } = req.params;
  res.json(`Updated User ${name}`);
};

const deleteUserByName = (req, res) => {
  const { name } = req.params;
  res.json(`Deleted user ${name}`);
};

module.exports = {
  getAllUsers,
  getOneUserByName,
  createUser,
  updateUserByName,
  deleteUserByName,
};
