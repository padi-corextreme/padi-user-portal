import React from "react";
import { toast, Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  // const navigate = useNavigate()

  const handleSubmit = async (event) => {
    // Prevent default form submit behavior
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    try {
      // Post form data to the backend
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/register`,
        {
          method: "POST",
          body: JSON.stringify({
            name: formData.get("name"),
            telephone: formData.get("telephone"),
            email: formData.get("email"),
            // password: formData.get('password')
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status !== 201) {
        const data = await response.json();
        toast.error(data.error);
      } else {
        toast.success("Sign up success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-md mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Telephone
            </label>
            <input
              type="tel"
              name="telephone"
              placeholder="Enter your telephone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div> */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </>
  );
};

export default SignUpPage;
