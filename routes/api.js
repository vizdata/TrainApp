var express = require('express');
var request=require("request");

var router = express.Router();

//api for PNR status
router.route('/pnr')	
    .get(function(req, res){
        var resData = {};
        var options = {
                hostname: 'http://api.railwayapi.com/pnr_status/pnr/6241702756/apikey/dojto3642/',
                method: 'GET'             
            };
        request.get("http://api.railwayapi.com/pnr_status/pnr/6241702756/apikey/dojto3642/", function(error,response,body) {  
               if(error){
                 return res.send(error);
                }
                //console.log(response);
                //console.log(body);
                res.send(body);

                

            });
        });


//api for Train Schedule
router.route('/posts/:id')	
	
	.get(function(req, res){
		 
	})

	


module.exports = router;
