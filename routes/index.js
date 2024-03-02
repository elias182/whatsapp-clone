var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/login', function(req, res, next) {
  const { username } = req.body;
  req.session.user = username; // Guarda el nombre de usuario en la sesión
  res.redirect('/chat'); // Redirige a la página de chat
});

module.exports = router;
