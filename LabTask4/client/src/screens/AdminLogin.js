import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const res = await axiosInstance.post(
        "http://localhost:5000/user/adminLogin",
        data
      );
      // console.log(res);

      const { token } = res.data;
      localStorage.setItem("jwt_access_token", token);
      // console.log("Login successful. Token:", token);

      const adminEmail = data.email;
      navigate("/Admin", { state: { adminEmail } });
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
        className=" flex items-center justify-center"
        style={{ height: "90vh" }}
      >
        <div className="bg-white p-8 rounded shadow-lg w-96">
          <h1 className="text-2xl bg-blue-500 font-semibold mb-10 text-center text-white rounded-lgp-1 rounded-lg">
            Login
          </h1>
          <form>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-2 text-xs text-gray-500 bg-white px-1"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 -top-2 text-xs text-gray-500 bg-white px-1"
                >
                  Password
                </label>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
