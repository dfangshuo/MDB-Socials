// DEPENDENCIES
const router = require("express").Router();
const completeRequest = require("../util/routing.js").completeRequest;
const postsLogic = require("../logic/posts.js");

const postsRef = postsLogic.postsRef

// ROUTES
// get all posts
router.get("/posts", function(req, res) {
    completeRequest(req, res, function(params) {
    return postsLogic.getPosts();
  });
});

// get posts by id
router.get("/posts/:id", function(req, res) {
  req.checkParams("id", "no id present").notEmpty();
  req.checkParams("id", "post id does not exist").isValidId(postsRef);
  completeRequest(req, res, function(params) {
    return postsLogic.getById(params.id);
  });
});

// make post
router.post("/posts", function(req, res) {
  req.checkBody("title", "no title passed").notEmpty();
  req.checkBody("poster", "no poster passed").notEmpty();
  req.checkBody("imageUrl", "imageUrl is not a url").isValidUrl();

  req.checkBody("posterId", "no posterId passed").notEmpty();
  req.checkBody("posterId", "posterId does not exist").isValidId(postsRef);	

  req.checkBody("num", "no interestedUsers passed").notEmpty();
  req.checkBody("timePicked", "no time passed").notEmpty();

  // postsLogic.createByAutoId({
  // 	{"title" : req.body.title, "text": req.body.postText, "poster": req.body.poster, 
  // 	"imageUrl": req.body.imageUrl, "posterId": req.body.posterId, 
  // 	"num": req.body.num, "timePicked": req.body.timePicked}
  // });
  completeRequest(req, res, postsLogic.createByAutoId);
});

// update post
router.patch("/posts/:id", function(req, res) {
  req.checkParams("id", "no id present").notEmpty();
  req.checkParams("id", "post id does not exist").isValidId(postsRef);
  req.checkBody("num", "no interestedUsers passed").notEmpty();
  // postsLogic.update(id, {
  // 	req.body.interestedUsers
  // });
  completeRequest(req, res, function(params) {
  	return postsLogic.update(params.id, params.num);
});
});

// completeRequest (if you look at the routing.js file) EXPECTS a function that takes in a dictionary and returns a promise
// your update function, however, takes in TWO parameters, and returns a promise, and so in this case, the 
// return value is fine, so you just wanna return a function call to postsLogic.update. HOWEVER, this is a function that takes in 
// 2 parameters, do you want to createa a function taht takes in a dictionary, passing in that DICTIONARY'S VALUES INTO YOUR UPDATE FUNCTION
// WHICH YOU SUBSEQUENTLY RETURN 

// EXPORTS
module.exports = router;