import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axiosInstance from "../service/axiosInstance";
import axios from "axios";

export default function AddItemModal(props) {
  const [item, setItem] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
    image: null,
    description: "",
  });

  const handleFileChange = (e) => {
    setItem({ ...item, image: e.target.files[0] });
  };

  const handleAddItem = async () => {
    const formData ={
      product_name: item.name,
      product_category: item.category,
      product_price: item.price,
      product_Stock: item.stock,
      product_description: item.description,
    }
    const dataa = new FormData();
    const filename = Date.now() + item.image.name;
    dataa.append("name", filename);
    dataa.append("file", item.image);
    formData.product_image = filename;
    try {
      const data = await axios.post('http://localhost:5000/api/upload', dataa);
      console.log(data)
  } catch (err) {
      console.log("err>>>", err);
  }
    try {

      console.log(formData);
      const response = await axiosInstance.post("http://localhost:5000/product/upload", formData);
      
      console.log("Item added successfully:", response.data);
      props.onHide();
      props.onAddItemSuccess();
    } catch (error) {
      console.error("Error adding item:", error.response.data);
    }
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Item Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Item Name"
                value={item.name}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Item Category</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Item Category"
                value={item.category}
                onChange={(e) =>
                  setItem({ ...item, category: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Item Price</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Item Price"
                value={item.price}
                onChange={(e) => setItem({ ...item, price: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Stock</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Stock"
                value={item.stock}
                onChange={(e) => setItem({ ...item, stock: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Item Image</label>
              <input
                type="file"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Item Image"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Item Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={item.description}
                onChange={(e) =>
                  setItem({ ...item, description: e.target.value })
                }
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleAddItem}>Add Item</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
