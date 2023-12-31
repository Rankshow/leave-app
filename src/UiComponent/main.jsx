import React, { useEffect, useState } from "react";
import Footer from "./footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config-firebase/firebase";


const Main = () => {
  // toastify notification
  
  // state of every input
  const [firstName, setFirstName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [date, setDate] = useState("");
  const [textarea, setTextArea] = useState("");

  const collectionUserRef = collection(db, "users");
  // handleSubmitted
  const handleSubmitted = async () => {
    const submitted = () => toast.success("Successfully submitted🎉 ! !");

    await addDoc(collectionUserRef, {firstName, employeeId,email, position, phoneNo, date, textarea}, submitted());

  }
  return (
    <>
      <div className="font-medium">
        <h1 className="md:text-3xl py-2 font-bold text-orange-700 text-center text-2xl">
          Leave Request Form
        </h1>
        <p className="text-center mb-4">
          Please, input your <b>leave details</b> below{" "}
          <sup className="text-red-600 font-bold">*</sup>
        </p>

        <main className="max-w-2xl mx-auto">
          <div className="mb-4 ml-4">
            <label htmlFor="fullName">Full Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="md:w-[400px] w-60 ml-7 p-2 rounded-md"
              type="text"
              placeholder="Enter your name"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="EnployeeId">Employee ID</label>
            <input
              onChange={(e) => setEmployeeId(e.target.value)}
              className="md:w-[400px] w-60 ml-3 p-2 rounded-md"
              type="text"
              placeholder="Employee ID"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="firstName">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="md:w-[400px] w-60 ml-[4em] p-2 rounded-md"
              type="email"
              placeholder="Email"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="firstName">Position</label>
            <input
              onChange={(e) => setPosition(e.target.value)}
              className="md:w-[400px] w-60 ml-[3em] p-2 rounded-md"
              type="text"
              placeholder="Position"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="firstName">Phone No</label>
            <input
              onChange={(e) => setPhoneNo(e.target.value)}
              className="md:w-[400px] w-60 ml-[2.2em] p-2 rounded-md"
              type="number"
              placeholder="Phone Number"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="firstName">Date for the commencement of leave</label> <br />
            <input
              onChange={(e) => setDate(e.target.value)}
              className="md:w-[400px] mt-2 w-60 ml-[6.5em] p-2 rounded-md"
              type="date"
            />
            <hr className="w-2/3 max-w-2xl md:text-red-700 mx-auto mb-4 mt-4" />
            <label htmlFor="Purpose">Purpose for leave</label> <br />
              <textarea 
              onChange={(e) => setTextArea(e.target.value)}
              className="rounded-md md:ml-[6em] pt-1 pl-2 mx-4 my-3 w-80" cols={60} rows={5} name="value"
              placeholder="Purpose for leave..."
            />
          </div>
          <button onClick={handleSubmitted} type="submit" className="bg-red-600 py-2 px-2 mx-[7em] text-white rounded-md hover:opacity-[.7]">Submit Request</button>
          <ToastContainer />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Main;
