var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
// var fs = require("fs");

var router = express.Router();           
var port = process.env.PORT || 8080;   
const resourceSet = [
  {
    'id':1001,
    'name':"Apple iPhone",
    'desc':"apple iphone designed by California, made in China"
  },
  {
    'id':1002,
    'name':"Huawei Mate50",
    'desc':"Huawei smartphone designed  by Shengzhen, China"
  },
  {
    'id':1003,
    'name':"Mi phone",
    'desc':"Xiaomi phone designed by beijin China"
  },
];

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the Recycle Server API!' });   
});

router.get('/matches/:terms', function (req, res) {
  termList = req.params.terms.split(";")  
  console.log("Received query for term list:" + termList);
  // submit to worker for crawling the web , input is termList

  var array = [];
  termList.forEach(element => {
    ret = resourceSet.find(x => x.desc.includes(element));
    if(!ret) {
      res.status(404).send("can not find the terms: %s", req.params.terms);
    } else {
      array.push(ret);
    }
  });
  

  res.end(JSON.stringify(array));
})

router.get('/resource/:resourceId', function(req, res) {
  console.log("Received query for resource ID: " + req.params.resourceId);
  rets = resourceSet.find(x => x.id == parseInt(req.params.resourceId))
  if(!rets){
    res.status(404).send("can not find the id: %s", req.params.resourceId);
  }else{
    console.log(rets);
    res.end(JSON.stringify(rets));
  }
});

app.use('/api', router);

var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("server started: http://%s:%s", host, port)
})