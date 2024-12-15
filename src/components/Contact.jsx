import NavBar from "./NavBar";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <main className="flex-grow">
        <section className="py-10">
          <div className="container mx-auto px-5">
            <div className="bg-gray-100 rounded-lg p-10">
              <div className="text-center mb-10">
                <div className="inline-block bg-primary text-white p-4 rounded-full mb-4">
                  <i className="bi bi-envelope text-2xl"></i>
                </div>
                <h1 className="text-3xl font-bold">Get in touch</h1>
                <p className="text-gray-600">Let &apos; s work together!</p>
              </div>

              <div className="max-w-lg mx-auto">
                <form id="contactForm">
                  {/* Name Input */}
                  <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name..."
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="name@example.com"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="mb-5">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="(123) 456-7890"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div className="mb-5">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Enter your message here..."
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                      rows="4"
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
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4">
        <div className="container mx-auto px-5 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm">&copy; Your Website 2023</div>
          <div className="flex space-x-2 text-sm">
            <a className="hover:text-primary" href="#!">Privacy</a>
            <span>&middot;</span>
            <a className="hover:text-primary" href="#!">Terms</a>
            <span>&middot;</span>
            <a className="hover:text-primary" href="#!">Contact</a>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default Contact;