var express = require('express');
const bodyParser = require('body-parser');
const router = express()
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
/* GET home page. */
router.post('/sms-hook', function(req, res, next) {
  // res.send({ title: 'Express' })
  // console.log(res.json({requestBody: req.body}))
  console.log(req.body)
  res.json({status: "ok"})
  res.end();

});

module.exports = router;
