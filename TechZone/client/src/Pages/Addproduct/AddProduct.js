import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, getProducts } from "../../JS/Actions/product";
import "./AddProduct.css";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };

  const handleADD = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newProduct.name);
    data.append("description", newProduct.description);
    data.append("prix", newProduct.prix);
    data.append("reference", newProduct.reference);
    
   

    data.append("imageURL", file);
    dispatch(addProduct(data));
    navigate("/Produits");
  };

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div>
      <h1>
        <p className="normed">ADD A NEW PRODUCT</p>
      </h1>
      <div className="cadre2">
        <div className="cadre33">
          <Form onSubmit={handleADD}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="forms">product image</Form.Label>
              <Form.Control
                encType="multipart/form-data"
                type="file"
                onChange={handlePhoto}
              />
              <Form.Label className="forms">our product</Form.Label>
              <Form.Control
                type="text"
                placeholder="product name"
                name="name"
                onChange={handleChange}
              />
              <Form.Label className="forms">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
   <Form.Label className="forms">price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                name="price"
                onChange={handleChange}
              />
              <Form.Label className="forms">Reference</Form.Label>
              <Form.Control
                type="text"
                placeholder="Reference"
                name="reference"
                onChange={handleChange}
              />
            
               

              <Button
                className="bouton"
                variant="light"
                type="submit"
                onClick={handleADD}
              >
                <span className="boutontext">add a new product</span>
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
