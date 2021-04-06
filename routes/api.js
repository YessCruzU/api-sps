const express = require('express');

const router = express.Router();

const user = require('../model/userPost');
const notePost = require('../model/notePost')


//Service User
router.get('/users', (req, res) => {
    user.find({})
        .then((data) => {
            res.json(data);
        }).catch((error) => {
            res.status(500).json({ msg: 'Internal server:', error });
        });
});

router.post('/new-user', (req, res) => {
    const data = req.body;
    const newUser = new user(data);

    newUser.save().then(data => {
        return res.json({ msg: 'Success insert user' });
    }).catch(error => {
        return res.status(500).json({ msg: 'Internal server:', error });

    })

});

router.get('/notes', (req, res) => {
    notePost.find({})
        .then((data) => {
            return res.json(data);
        })
        .catch(error => {
            return res.status(500).json({ msg: 'Internal server:', error });
        });
});

//Service Notes
router.post('/new-note', (req, res) => {

    const data = req.body;
    const newNote = new notePost(data);
    newNote.save().then(data => {
        return res.json({ msg: 'Success insert note' });
    }).catch(error => {
        return res.status(500).json({ msg: 'Sorry, internal server errors', error });
    })

});

router.put('/update-note', (req, res) => {
    const data = req.body;  
    data.params['date'] = Date.now()   

    notePost.updateOne(
        data.idNote,
        data.params
    ).then((data) => {
        console.log(data);
        return res.json({ msg: 'Success update note' });
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({ msg: err });
    })
});

router.post('/delete-note', (req, res) => {
    const data = req.body;

    notePost.deleteOne({ _id: data._id }, function (err) {
        if (!err) {
            return res.json({ msg: 'Success delete note' });
        }
        else {
            return res.status(500).json({ msg: 'Sorry, not exist' });
        }
    });
});





module.exports = router;