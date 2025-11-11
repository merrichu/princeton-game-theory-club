export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Interested in joining or learning more? We&apos;d love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
            <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">📧 Email</h3>
            <p className="text-gray-600">gametheory@princeton.edu</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
            <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">📍 Location</h3>
            <p className="text-gray-600">
              Weekly meetings at Friend Center 101<br />
              Fridays, 7:00 PM
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
            <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">💬 Join Us</h3>
            <p className="text-gray-600">
              Sign up for our mailing list:<br />
              <a href="mailto:gametheory@princeton.edu?subject=Mailing%20List" className="text-princeton-orange hover:underline">
                Subscribe here
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <p className="text-gray-600 mb-4">Stay updated with our latest events and activities on social media.</p>
          <div className="flex gap-6">
            <a href="#" className="text-princeton-black hover:text-princeton-orange transition-colors">Instagram</a>
            <a href="#" className="text-princeton-black hover:text-princeton-orange transition-colors">Facebook</a>
            <a href="#" className="text-princeton-black hover:text-princeton-orange transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}

