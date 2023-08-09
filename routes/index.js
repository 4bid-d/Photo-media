var express = require('express');
var router = express.Router();
const photos = require('../public/data/photos.json');
const fs = require("fs")
const fsp = require("fs/promises")
var { v4} = require("uuid")

// const parsed =JS{ON.parse(JSON.stringify(photos))
/* GET home page. */
router.get('/',async function(req, res) {
  let photos ;
  fsp.readFile("./public/data/photos.json","utf8").then((result)=>{
    photos = JSON.parse(result)
    console.log(photos)
    res.render('photo website', { title: 'Photogram' , photos : photos});
  })
});

router.post('/upload', function(req, res) {
    const img = req.files.image
    const id= v4()
    let arr  

    obj = {
      title : "nothing",
      link : `${id}`
    }
    fs.readFile('./public/data/photos.json', 'utf8', (err, jsonString) => {
      if (err) {
          console.error('Error reading file:', err);
      } else {
        const array = JSON.parse(jsonString);
        array.push(obj)
        arr  = JSON.stringify(array)
  
        console.log('Read array from file:', array);
        img.mv(`public/images/${id}.jpg`)
    
          fs.writeFile('./public/data/photos.json', arr, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('Array written to file successfully.');
            }
          });
      }
  });

    
  
    res.json({
      message : "success"
    })
});

module.exports = router;