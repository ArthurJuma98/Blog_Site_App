const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

//blog routes

router.get('/blogs', blogController.blog_index);

//post request
router.post('/blogs', blogController.blog_create_post);


//create new blog

router.get('/blogs/create', blogController.blog_create_get);


//get blog by id

router.get('/blogs/:id', blogController.blog_details);

//delete blog

router.delete('/blogs/:id', blogController.blog_delete)



module.exports = router;