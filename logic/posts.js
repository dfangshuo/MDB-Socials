// DEPENDENCIES
const db = require("../util/db.js");

// REF
const ref = db.refs.postsRef;                   // since i already have a database with nodes, do i

// METHODS
function getPosts() {
  return db.getAll(ref);
}

function getById(id) {
  return db.getById(ref, id);
}

function createByAutoId(fieldToVal) {
  // console.log(ref);
  return db.createByAutoId(ref, {
    title: fieldToVal.title,
    text: fieldToVal.text,
    poster: fieldToVal.poster,
    imageUrl: fieldToVal.imageUrl,
    posterId: fieldToVal.posterId,
    num: fieldToVal.num,
    timePicked: fieldToVal.timePicked
  });
}

function update(id, interestedUsers) {
  return db.updateById(ref, id, {
    num: interestedUsers
  });
}

// function getById(id) {
//   return db.getById(ref, id);
// }

// function createByManualId(id, fieldToVal) {
//   return db.createByAutoId(ref, fieldToVal.fbId, {
//     fullname: fieldToVal.fullname,
//     email: fieldToVal.email,
//     profPicUrl: fieldToVal.profPicUrl
//   });
// }

// function favorite(id, favId) {
//   return db.transaction(ref, id, "favoriteIds", function(favoriteIds) {
//     favoriteIds = favoriteIds || [];
//     favoriteIds.push(favId);
//     return favoriteIds;
//   });
// }

// function unFavorite(id, favId) {
//   return db.transaction(ref, id, "favoriteIds", function(favoriteIds) {
//     favoriteIds = favoriteIds || [];
//     var index = favoriteIds.indexOf(favId);
//     favoriteIds.splice(index, 1);
//     return favoriteIds;
//   });
// }

// EXPORTS
module.exports.getPosts = getPosts;
module.exports.getById = getById;
module.exports.createByAutoId = createByAutoId;
module.exports.update = update;
module.exports.postsRef = ref;


// module.exports.getById = getById;
// module.exports.createByManualId = createByManualId;
// module.exports.favorite = favorite;
// module.exports.unFavorite = unFavorite;
// module.exports.ref = ref;
