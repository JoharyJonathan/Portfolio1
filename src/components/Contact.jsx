import NavBar from "./NavBar";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Remplacez par votre Service ID EmailJS
        "your_template_id", // Remplacez par votre Template ID EmailJS
        formData,
        "your_user_id" // Remplacez par votre User ID EmailJS
      )
      .then(
        (response) => {
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          setStatusMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <>
      <NavBar />
      <header className="bg-gray-100 py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Contact Me</h1>
      </header>
      <div className="flex flex-col min-h-screen">
        {/* Page Content */}
        <main className="flex-grow">
          {/* Section for Personal Info */}
          <section className="pt-10">
            <div className="container mx-auto px-5">
              <div className="bg-gray-100 rounded-lg p-10">
                <div className="info-wrap">
                  {/* Info Item: Address */}
                  <div
                    className="info-item flex items-start space-x-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-geo-alt text-xl flex-shrink-0"></i>
                    <div>
                      <h3 className="text-lg font-bold">Address</h3>
                      <p className="text-gray-600">
                        052 A Ter I Alakamisy Anosiala , Antananarivo, Madagascar
                      </p>
                    </div>
                  </div>

                  {/* Info Item: Call Us */}
                  <div
                    className="info-item flex items-start space-x-4 mt-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="bi bi-telephone text-xl flex-shrink-0"></i>
                    <div>
                      <h3 className="text-lg font-bold">Call Us</h3>
                      <p className="text-gray-600">+261 34 09 925 49</p>
                    </div>
                  </div>

                  {/* Info Item: Email Us */}
                  <div
                    className="info-item flex items-start space-x-4 mt-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <i className="bi bi-envelope text-xl flex-shrink-0"></i>
                    <div>
                      <h3 className="text-lg font-bold">Email Us</h3>
                      <p className="text-gray-600">rjoharyjonathan@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-10">
            <div className="container mx-auto px-5">
              <div className="bg-gray-100 rounded-lg p-10">
                <div className="text-center mb-10">
                  <div className="inline-block bg-primary text-white p-4 rounded-full mb-4">
                    <i className="bi bi-envelope text-2xl"></i>
                  </div>
                  <h1 className="text-3xl font-bold">Get in touch</h1>
                  <p className="text-gray-600">Let&apos;s work together!</p>
                </div>

                <div className="max-w-lg mx-auto">
                  <form id="contactForm" onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="mb-5">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name..."
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="name@example.com"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="mb-5">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="(123) 456-7890"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Message Input */}
                    <div className="mb-5">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Enter your message here..."
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-green-400 p-2 rounded-lg hover:bg-green-700 hover:text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  {statusMessage && (
                    <p className="text-center mt-5">{statusMessage}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;