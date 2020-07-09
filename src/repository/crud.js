var mongoose = require('mongoose');

exports.getAll = function (model, cb) {
  const Model = require("./../entities/" + model);
  Model.find({}, function (err, docs) {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(false, docs);
    }
  });

}


// exports.getAlls = function (model, cb) {
//   sequelize.query(`SELECT * FROM ${model}`, { type: sequelize.QueryTypes.SELECT })
//     .then(data => {
//       cb(false, data);
//     }).catch(err => {
//       console.log(err);
//       cb(err, null)
//     })
// }


exports.getById = function (model, id, cb) {


  if (id instanceof mongoose.Schema.Types.ObjectId) {
    const Model = require("./../entities/" + model);
    Model.findById(id).exec(cb);

  } else {
    throw new Error("invalid id");
  }
}


exports.getSpecificFields = function (model, fieldOptions, cb) {
  const Model = require("./../entities/" + model);
  var query = Model.find().select(fieldOptions);// { "name": 1, "_id": 0}, name will be selected and _id will not be selected

  query.exec(cb);
}



exports.post = function (model, postData, cb) {

  const Model = require("./../entities/" + model);
  new Model(postData).save(cb);

}



