import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.warning("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/contact", formData);

      if (res.status === 200 || res.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } 
    catch (error) {
      if (error.response) {
        toast.error((error.response.data.error || "Something went wrong"));
      } 
      else {
        toast.error("Server error.");
      }
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#192832]">
          <div className="max-w-7xl mx-auto flex items-center justify-center min-h-screen p-4 ">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-[#192832] mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192832]"
          />

          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192832]"
          />

          <textarea
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192832]"
          >
          </textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#192832] text-white font-semibold py-3 rounded-lg hover:bg-white hover:border-2 hover:border-[#192832] hover:text-black cursor-pointer transition duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
    </div>
  );
};

export default ContactForm;
