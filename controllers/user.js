const User = require("../models/user");

async function getAllUsers(req, res) {
  const allDbUsers = await User.find({});
  res.json(allDbUsers);
}

async function getUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "no user with that id" });
  res.json(user);
}
async function patchUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Updated...." });
  return res.json({ status: "Success..." });
}

async function deleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Deleted successfully." });
}

const handleCreateUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(404).json({ msg: "All fields are not inserted..." });
  }
  const user = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  return res
    .status(201)
    .json({ msg: "succesfully created user...", id: user._id });
};

module.exports = {
  getAllUsers,
  getUserById,
  patchUserById,
  deleteUserById,
  handleCreateUser,
};
