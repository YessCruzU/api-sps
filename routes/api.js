const express = require('express');

const router = express.Router();

const user = require('../model/userPost');
const notePost = require('../model/notePost')

//Service User

router.get('/users', (req, res) => {  
    user.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/new-user', (req, res) => {  
    
    const data = req.body;
 
    const newUser = new user(data);
    newUser.save().then(
        doc =>{
            console.log(doc);
            return res.json({
                msg: 'Success'
            });
        }
    ).catch(err=>{
        res.status(500).json({ msg: 'Sorry, internal server errors' });
        console.error(err);
    })

   });

   router.get('/notes', (req, res) => {  
    notePost.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

//Service Notes

   router.post('/new-note', (req, res) => {  
   
    const data = req.body;
    const newNote = new notePost(data);
    newNote.save().then(
        doc =>{
            return res.json(data);
            console.log(doc);
        }
    ).catch(err=>{
        res.status(500).json({ msg: 'Sorry, internal server errors' });
        console.error(err);
    })

   });

   router.post('/delete-note', (req, res) => {  
   
    const data = req.body;
    const newNote = new notePost(data);
    console.log(data);
    console.log(data._id);

    notePost.deleteOne({_id: data._id }, function(err) {
        if (!err) {
            return res.json({ msg: 'Success delete' });
        }
        else {
            return res.status(500).json({ msg: 'Sorry, not exist' });
        }
    });

  /*  notePost.deleteOne({_id: ObjectId(data._id)}).then(
        doc =>{  
            console.log('succcss');
            return res.json(doc);
          
        }
    ).catch(err=>{
        res.status(500).json({ msg: 'Sorry, internal server errors' });
        console.error(err);
    })*/

   });





module.exports = router;