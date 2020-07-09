const repository = require("./../repository/crud");

exports.getAll = function (req, res) {
    repository.getAll("comment", (err, data) => {
        if (!!err)
            res.json({ success: false, message: "error occurred", err: err });
        else
            res.json({ success: true, data })
    });
}





exports.post = function (req, res) {
    repository.post("comment", req.body, (err, data) => {
        if (!!err) {
            res.json({ success: false, message: "error occurred", err: err });
        }
        else {
            res.json({ success: true, data })
        }
    })
}

