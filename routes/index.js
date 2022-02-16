var express = require('express');
const bodyParser = require('body-parser');

// var router = express.Router();
const router = express()
router.use(express.json());
// app.use(express.urlencoded({ extended: true }));
router.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser);
// app.use(bodyParser.urlencoded());
router.use(bodyParser.json());
/* GET home page. */
router.post('/', function(req, res, next) {
  // res.send({ title: 'Express' })
  // console.log(res.json({requestBody: req.body}))
  // console.log(req.body)
  res.json({requestBody: req.body})

});

module.exports = router;
