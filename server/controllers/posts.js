const Post = require("../models").Post;

module.exports = {
  create(req, res) {
    return Post
    .create({
      title: req.body.title,
      body: req.body.body
    })
    .then(post => res.status(201).send(post))
    .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Post
    .all()
    .then(posts => res.status(200).json(posts)
    .catch(error => res.status(400).send(error)));
  },
};
