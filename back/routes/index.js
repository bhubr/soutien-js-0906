const express = require('express');
const connection = require('./config')
const router = express.Router();

// Routes:
// Recuperer tous les posts (table post)
router.get('/posts', (req, res) => {
  connection.query('SELECT * FROM post', (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json(result)
    }
  })
})
// Recuperer un post via son id
router.get('/users/:idUser/posts/:idPost', (req, res) => {
  const idUser = req.params.idUser;
  const idPost = req.params.idPost;
  connection.query('SELECT * FROM user AS u JOIN post AS p ON p.user_id = u.id WHERE u.id = ? AND p.id = ?', [idUser, idPost], (err, results) => {
    if (err) {
      return res.json({
        error: err.message,
        sql: err.sql
      });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Post Not Found' });
    }
    return res.json(results[0]);
  });
});

router.post('/posts', (req, res) => {
  const formData = req.body;

  connection.query('INSERT INTO post SET ?', formData, (err, results) => {
    // JOHANNA t'es la best.
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      })
    }

    return connection.query('SELECT * FROM post WHERE id = ?', results.insertId, (err2, records) => {
      if (err2) {
        return res.status(500).json({
          error: err.message,
          sql: err.sql
        })
      }

      return res.json(records[0]);

    })

  })
})

router.get('/toto', (req, res) => res.json({ message: 'ok' }))

module.exports = router;
