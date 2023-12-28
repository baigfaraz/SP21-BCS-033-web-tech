import React, { useEffect, useState } from "react";
import Headers from "../components/Header";
import AddItemModal from "../components/AddItemModal";
import { useLocation } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const { state } = useLocation();
  const { adminEmail } = state;
  const [user, setUser] = useState({});

  const [products, setProducts] = useState([]);

  // fetch products
  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(
        "http://localhost:5000/product/getProducts"
      );
      setProducts(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching products:", error.response.data);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  // fetch admin data

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axiosInstance.get(
          `http://localhost:5000/user/information?email=${adminEmail}`
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAdmin();
  }, [adminEmail]);

  // delete product

  const handleDelete = async (productId) => {
    try {
      await axiosInstance.delete(
        `http://localhost:5000/product/deleteProductById/${productId}`
      );
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error.response.data);
    }
  };

  const handleAddItemSuccess = () => {
    fetchProducts();
  };

  return (
    <>
      <div>
        <Headers />
      </div>

      <table
        className="container"
        style={{
          borderCollapse: "separate",
          borderSpacing: "10px",
          marginBottom: "3rem",
          marginTop: "2rem",
        }}
      >
        <tbody>
          <tr
            style={{
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <td>{user.Name}</td>
            <td>{user.email}</td>
            <td>
              <button
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  backgroundColor: "red",
                  color: "white",
                }}
                onClick={() => {
                  navigate("/AdminLogin");
                }}
              >
                Logout
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {products.length === 0 ? (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className="btn btn-success"
            onClick={() => setModalShow(true)}
          >
            + Add Item
          </button>
        </div>
      ) : (
        <div className="container">
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 className="shopProductHeading">All Items</h1>
            <button
              className="btn btn-success"
              onClick={() => setModalShow(true)}
            >
              + Add Item
            </button>
          </div>
          <table
            className="container"
            style={{
              borderCollapse: "separate",
              borderSpacing: "10px",
              marginBottom: "3rem",
            }}
          >
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Category</th>
                <th>Remove Option</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  style={{
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                  }}
                >
                  <td>
                    <img
                      src={`http://localhost:5000/images/${product.product_image}`}
                      alt="Product"
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "5px",
                      }}
                    />
                  </td>
                  <td>{product.product_name}</td>
                  <td>{product.product_Stock}</td>
                  <td>${product.product_price}</td>
                  <td>{product.product_category}</td>
                  <td>
                    <button
                      style={{
                        padding: "5px 10px",
                        borderRadius: "5px",
                        backgroundColor: "red",
                        color: "white",
                      }}
                      onClick={() => handleDelete(product._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <AddItemModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAddItemSuccess={handleAddItemSuccess}
      />
    </>
  );
}
