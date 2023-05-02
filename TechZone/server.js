const express = require("express") ;
const app = express();


require("dotenv").config();

app.use(express.json())

const connectDB = require ('./config/connectDB')
connectDB();



app.use('/api/user' , require ('./routes/user'))

app.use('/api/admin' , require ('./routes/admin'))

app.use('/api/product' , require ('./routes/product'))

app.use ('/api/messages' , require ('./routes/messages'))

app.use ('/api/order' , require ('./routes/order'))



const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello from Node.js!')
})

app.listen(PORT , error =>{
    
    error? console.error(`Fail to connect , ${error}`)
    :
    console.error(`Server is running on port ${PORT}`)
}) 




