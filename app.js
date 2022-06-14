const express = require('express');
const mongoose = require('mongoose');
const Product = require('./Model/Product');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(express.json()); 

var port = process.env.PORT || 3000;

// database connection
const url = `mongodb://localhost:27017/ProductData`;
mongoose.connect(url, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(() =>
{
    console.log("Connected to database");
})
.catch((err) => 
{
    console.log(err.messPrice);
});


//Home Route
// app.get('/', (req, res) => {
//     res.send("Welcome to <h2>Babar-Fitness-Studio</h2>");
// });
//Fetch all data from Db
app.get('/', async (req, res) => {
    const data = await Product.find();
    res.send(data);      
});
//Fetch only one record
app.get('/api/products/:id', async (req, res) => {
    try
    {
        let data = await Product.findById(req.params.id);
        res.send(data); 
    }
    catch
    {
        return res.status(404).send('User data was not found');
    }     
});
//Post new-user-data route
app.post('/api/products/post', async (req, res) => {
    const model = new Product({
        ProductName:req.body.ProductName,
        Price:req.body.Price,
        Description:req.body.Description,
    })
   try
   {
       const data = await model.save(); 
       res.json(data);  
   }  
   catch(err)
   {
        res.send(err); 
   } 
});
//Modify one record
app.put('/api/products/update/:id', (req, res) => {
    const id = req.params.id;
    const update = {
        ProductName:req.body.ProductName,
        Price:req.body.Price,
        Description:req.body.Description,
    };

    Product.findByIdAndUpdate(id, update, (err,Product)=>{
        if(!Product)
        {
            return res.status(404).send('products data was not found');
        }
        res.send(Product);
    });  
});
//delete record route
app.delete('/api/products/delete/:id', (req, res) =>{
    const id=req.params.id;
    Product.findByIdAndRemove(id,(err,Product)=>{
        if(!Product)
        {
            return res.status(404).send('products data was not found');
        }
        res.send(Product);
    });
});

app.listen(port);