const repository = require("./../repository/crud");
// const Post = require("./../entities/post")
// const Comment = require("./../entities/Comment")

exports.getAll = function (req, res) {

    repository.getAll("post", (err, data)=>{
        if(!!err) 
        res.json({ success: false, message: "error occurred", err: err });
        else
        res.json({ success: true, data })
    });

}

exports.getTitles = function (req, res) {

  repository.getSpecificFields("post", {description: 0, tags: 0}, (err, data)=>{
    if(!!err) 
    res.json({ success: false, message: "error occurred", err: err });
    else
    res.json({ success: true, data })
  })
}



exports.post = function (req, res) {

    repository.post("post", req.body, (err, data)=>{
        if(!!err) 
        res.json({ success: false, message: "error occurred", err: err });
        else
        res.json({ success: true, data })
    })
}



