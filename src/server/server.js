var express = require('express');
// var getId = require("./getId");
var app = express();
//var bodyParser = require('body-parser');
// var fs = require("fs");

var router = express.Router();           

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
    res.json({ message: 'Welcome to the API!' });   
});

router.get('/matches/:terms', function (req, res) {
  termList = req.params.terms.split(";")  
  console.log("term list:" + termList);
  // submit to worker, input is termList

  var array = [];
  termList.forEach(element => {
    ret = resourceSet.find(x => x.desc.includes(element));
    if(!ret) {
      console.log("not match");
    } else {
      array.push(ret);
    }
  });
  

  res.end(JSON.stringify(array));
})

router.get('/resource/:resourceId', function(req, res) {
  rets = resourceSet.find(x => x.id == parseInt(req.params.resourceId))
  if(!rets){
    res.status(404).send("can not find the id %s", req.params.resourceId);
  }else{
    console.log(rets);
    res.end(JSON.stringify(rets));
  }
});

app.use('/api', router);

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("server started: http://%s:%s", host, port)
})

/**
 * deprecated code
 */
 // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      //   data = JSON.parse(data);
      //   const item = books.find(x => x.id == parseInt(req.params.resourceId)); 
      //   if(!item){//404
      //     res.status(404).send("can not find the id %s", req.params.resourceId);
      //   }else{
      //     console.log(item);
      //     res.end(JSON.stringify(item));
      //   }
      // });

  // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
  //     console.log( data );
  //     res.end( data );
  // });