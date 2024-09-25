const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  patchUserById,
  deleteUserById,
  handleCreateUser,
} = require("../controllers/user");
//this it html document - Server Side Rendered page
// router.get("/users", async (req, res) => {
//   const allDbUsers = await User.find({});
//   const html = `
//       <ul>
//           ${allDbUsers
//             .map((user) => `<li>${user.firstName} - ${user.email} </li>`)
//             .join("")}
//       </ul>
//    `;
//   res.send(html);
// });

//this sends data in a json format

router.route("/").get(getAllUsers).post(handleCreateUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(patchUserById)
  .delete(deleteUserById);

module.exports = router;
