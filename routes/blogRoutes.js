const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Blog = mongoose.model('Blog');

module.exports= app=>{
    app.get('/api/blogs',requireLogin, async(req,res)=>{
        const blogs = await Blog.find({_user: req.user.id}).then((blogs)=>{
                res.send(blogs);
        }).catch(err=>{
            res.send("unable to retrieve data")
        })
        
    });
    app.post('/api/blogs', async(req,res) => {
        const { title, content } = req.body;
        const blog = new Blog({
            title,
            content,
            _user: req.user.id
        });
        try{
            await blog.save();
            res.send(blog);
        }
        catch(err){
            console.log(err);
        }
    })
}