import React, { useState } from "react";
import { toast } from "react-toastify";

const VisitorPassForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields");
      return;
    }

    console.log("Visitor Pass Data:", formData);

    toast.success("🎉 Visitor Pass Registered Successfully!");

    onClose(); // close modal
  };

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name *"
        className="w-full p-3 rounded-xl border"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address *"
        className="w-full p-3 rounded-xl border"
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number *"
        className="w-full p-3 rounded-xl border"
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        className="w-full p-3 rounded-xl border"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full py-3 rounded-xl font-bold bg-black text-white"
      >
        Pay ₹299 & Get Pass
      </button>
    </form>
  );
};

export default VisitorPassForm;
