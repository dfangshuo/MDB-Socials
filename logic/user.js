// DEPENDENCIES
const db = require("../util/db.js");

// REF
const ref = db.refs.userRef;

// METHODS
// get a user
function getById(id) {
  return db.getById(ref, id);
}

function createByManualId(fieldToVal) {
  return db.createByManualId(ref, fieldToVal.id, {
    name: fieldToVal.name,
    username: fieldToVal.username,
    imageURL: fieldToVal.imageURL,
    interestedEvents: fieldToVal.interestedEvents,
    id: fieldToVal.id
  });
}

function update(id, interestedEvents) {
  return db.updateById(ref, id, {
    interestedEvents: interestedEvents
  });
}

//modify user

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
module.exports.getById = getById;
module.exports.createByManualId = createByManualId;
module.exports.update = update;
module.exports.userRef = ref;

// module.exports.favorite = favorite;
// module.exports.unFavorite = unFavorite;
// module.exports.ref = ref;
