const bodyParser = require("body-parser");
const express  = require("express");
const app = express();
const path  = require("path");

const collection = require("./mongodb")

const port  = 7000 ;

app.set("view engine" , "ejs");  // View Engine As "EJS"
app.set("views" , path.join(__dirname , "views"));  // Set Views Directory

// For Serving static files 
app.use('/static' , express.static('static'));
app.use(express.urlencoded());

// End Points

app.get("/" , (req,res)=>{
    res.status(200).render("index.ejs");
});

app.get("/contact" , (req,res)=>{
    res.status(200).render("contact.ejs");
});

app.post('/contact' , (req , res)=>{
    var mydata = new collection(req.body);
    mydata.save().then(()=>{
         res.status(400).render('feedback.ejs');
    }).catch(()=>{
         res.status(402).render('failedfdb.ejs');
    });
});

app.get("/course" , (req,res)=>{
    res.status(200).render("course.ejs");
});

app.get("/mission" , (req,res)=>{
    res.status(200).render("mission.ejs");
});
app.get("/learn" , (req,res)=>{
    res.status(200).render("learning.ejs");
});

app.get("/explore" , (req,res)=>{
    res.status(200).render("explore.ejs");
});

app.get("/freecourse" , (req,res)=>{
    res.status(200).render("freecourse.ejs");
});

app.get("/team" , (req,res)=>{
    res.status(200).render("team.ejs");
});

app.use((req,res)=>{
res.status(404).render('notfound.ejs')
});


app.post('/signup' ,async (req , res)=>{

    const data = {
         email: req.body.email,
          password: req.body.password
     }
      await collection.insertMany(data);
     res.send("ok");
    
});

// Start The Server
app.listen(port , ()=>{
    console.log(`Server is runing on port ${port}`)
})