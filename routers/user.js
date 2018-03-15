// DEPENDENCIES
const router = require("express").Router();
const completeRequest = require("../util/routing.js").completeRequest;
const userLogic = require("../logic/user.js");
const userRef = userLogic.userRef

// ROUTES
// get user by id
router.get("/user/:id", function(req, res) {
  req.checkParams("id", "no id present").notEmpty();
  req.checkParams("id", "user id does not exist").isValidId(userRef);
  completeRequest(req, res, function(params) {
    return userLogic.getById(params.id);
  });
});

// make user by manual id
router.post("/user/:id", function(req, res) {

  req.checkBody("id", "no id passed").notEmpty();

  // userLogic.createByAutoId(
  //   {"name": name, "username": username, "imageURL": imageURL, "id": id}
  //   );
  completeRequest(req, res, userLogic.createByManualId);
});


// update user
router.patch("/user/:id", function(req, res) {
  req.checkParams("id", "no id present").notEmpty();
  req.checkParams("id", "user id does not exist").isValidId(userRef);
  req.checkBody("interestedEvents", "no interestedUsers passed").notEmpty();
  // userLogic.update(id, {
  //   req.body.interestedUsers
  // });
  completeRequest(req, res, function(params) {
    return userLogic.update(params.id, params.interestedEvents)
  });
});

// EXPORTS
module.exports = router;
