import React, { useState } from "react";
import Line from "../image/line.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="bg-[#F3EAD3] p-10 rounded-lg shadow-lg max-w-7xl mx-auto">
      <div className="bg-gray-300 p-5 rounded-t-lg mb-8 ">
        <h1 className="text-4xl font-semibold text-[#362518] justify-center items-center flex">
          Contact RestRent.in.th
        </h1>
      </div>
      <div className="flex justify-between items-center mb-8">
        <p className="text-lg text-[#362518] font-medium ">
          KMUTT Bangmod Campus
          <hr className="my-2" />
          The 4th floor, the Office of the President Building 126 Pracha Uthit
          Rd.
          <br />
          , Bang Mod, Thung Khru, Bangkok 10140, Thailand
          <br />
          Open Monday – Friday Time 08.30 am – 04.30 pm
          <br />
          Phone: +66 2470 8000, +66 2470 0039
          <br />
          Fax: +66 2427 9860
        </p>

        <div className="flex text-center bg-[#F3F8FE] w-1/3 p-5 mx-auto rounded-lg shadow-sm">
          <img
            src={Line} // Replace with your QR code image URL
            alt="Add Line"
            className="w-20 h-20 mr-4 "
          />
          <div>
            <p className="text-xl  text-gray-700">Add Line: @restrent</p>
            <p className="mt-2">
              Add friend and chat with us any where any time
            </p>
          </div>
        </div>
      </div>

      {/* Swap the Map and Form order */}
      <div className="flex gap-8 flex-col-reverse lg:flex-row">
        {/* Map Section on the Left */}
        <div className="flex-1">
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.1069545794685!2d100.49386787537054!3d13.651257399612778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2sKing%20Mongkut%E2%80%99s%20University%20of%20Technology%20Thonburi!5e0!3m2!1sen!2sth!4v1742677038026!5m2!1sen!2sth"
             width="600" 
             height="450" 
             style={{border:0}}
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"
             ></iframe>
        </div>

        {/* Contact Form Section on the Right */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-[#362518] mb-4">
            Contact us *
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-lg"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-[#362518] text-white px-6 py-2 rounded-lg hover:bg-[#4e3622]"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className="bg-white text-[#362518] px-6 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
