// DEPENDENCIES
const router = require("express").Router();
const userRouter = require("./user.js");
const postsRouter = require("./posts.js");

// ROUTES
router.use(userRouter);
router.use(postsRouter);

// EXPORTS
module.exports = router;
