const express = require("express") ;
const router = express.Router();
const { addproduct, deleteproduct, getproducts, getOneProduct, updatedProduct} = require("../controllers/product");
const upload = require("../middleware/upload");



router.post('/addProduct',  upload.single("imageURL"), addproduct);
// update contact

router.delete('/:_id',  deleteproduct);

router.get ("/allproducts",   getproducts);

router.get('/:_id',  getOneProduct) ;






module.exports = router;