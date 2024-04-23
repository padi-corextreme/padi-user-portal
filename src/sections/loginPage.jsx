import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const LoginPage = () => {

  const handleSubmit = async (event) => {
    // Prevent default form submit behavior
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    try {
      // Post form data to the backend
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/login`,
        {
          method: "POST",
          body: JSON.stringify({
            email: formData.get("email"),
            telephone: formData.get('telephone')
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status !== 200) {
        const data = await response.json();
        toast.error(data.error);
      } else {
        toast.success("Login was successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className="max-w-md mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Telephone</label>
          <input
            type="tel"
            name="telephone"
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
    </>
  );
};

export default LoginPage;