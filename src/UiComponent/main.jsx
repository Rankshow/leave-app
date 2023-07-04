import React from "react";
import Footer from "./footer";

const Main = () => {
  return (
    <>
      <div>
        <h1 className="md:text-3xl font-bold text-blue-800 text-center">
          Leave Requet Form
        </h1>
        <p className="text-center mb-4">
          Please, input your <b>leave details</b> below{" "}
          <sup className="text-red-600 font-bold">*</sup>
        </p>

        <main className="max-w-2xl mx-auto">
          <div className="mb-4 ml-4">
            <label htmlFor="fullName">Full Name</label>
            <input
              className="md:w-[400px] w-60 ml-3 p-2 rounded-md"
              type="text"
              placeholder="Enter your name"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="EnployeeId">Employee ID</label>
            <input
              className="md:w-[400px] w-60 ml-3 p-2 rounded-md"
              type="number"
              placeholder="Employee ID"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="firstName">Email</label>
            <input
              className="md:w-[400px] w-60 ml-3 p-2 rounded-md"
              type="email"
              placeholder="Email"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="firstName">Position</label>
            <input
              className="md:w-[400px] w-60 ml-3 p-2 rounded-md"
              type="text"
              placeholder="Position"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="firstName">Phone No</label>
            <input
              className="md:w-[400px] w-60 ml-3 p-2 rounded-md"
              type="number"
              placeholder="Phone Number"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="firstName">Date for the commencement of leave</label> <br />
            <input
              className="md:w-[400px] mt-2 w-60 ml-3 p-2 rounded-md"
              type="number"
              placeholder="Phone Number"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="Purpose">Purpose for leave</label> <br />
              <textarea className="rounded-md md:ml-8 mx-4 my-3 w-80" cols={60} rows={5} name="value"
              placeholder="Purpose for leave..."
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Main;
