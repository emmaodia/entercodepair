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
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Post
    .findById(req.params.postId)
    .then(post => {
      if (!post) {
        return res.status(404).json({
          message: "Post not found"
        });
      }
      return res.status(200).json(post);
    })
    .catch(error => res.status(400).json({error: error}))
  },
  update(req, res) {
    return Post
    .findById(req.params.postId)
    .then(post => {
      if (!post) {
        return res.status(404).json({
          message: "Post not found"
        })
      }
      return post
      .update({
        title: req.body.title || post.title,
        body: req.body.body || post.body
      })
      .then(() => res.status(200).json(post))
      .catch(error => res.status(400).json({error: error}));
    })
    .catch(error => res.status(400).json({error: error}));
  },
  destroy(req, res) {
    return Post
    .findById(req.params.postId)
    then(post => {
      if (!post) {
        return res.status(404).json({
          message: "Post not found"
        })
      }
      return post
      .destroy()
      .then(() => res.status(200).send({ message: "Post successfully deleted!" }))
      .catch(error => res.status(400).json({
        error : error
      }))
    })
    .catch(error => res.status(400).json({
      error : error
    }))
  },
};
