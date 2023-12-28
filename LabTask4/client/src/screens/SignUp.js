import React, { useState } from "react";
import Header from "../components/Header";
import axiosInstance from "../service/axiosInstance"; // Import axiosInstance instead of axios
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [Name, setName] = useState(""); // changed from Name to name
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name, // changed from Name to name
      email,
      password,
    };
    try {
      const res = await axiosInstance.post(
        "http://localhost:5000/user/register",
        data
      );
      console.log(res);
      navigate("/Login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ height: "10vh" }}>
        <Header />
      </div>
      <div
        className="flex items-center justify-center"
        style={{ height: "90vh" }}
      >
        <div className="bg-white p-8 rounded shadow-lg w-96">
          <h1 className="text-2xl bg-blue-500 font-semibold mb-10 text-center text-white rounded-lg p-1 rounded-lg">
            Register
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="Name" 
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Name"
                  value={Name} 
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
