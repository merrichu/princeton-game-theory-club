export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
          About Us
        </h2>
        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          The Princeton Game Theory Club is a student-run organization dedicated to exploring the fascinating world of strategic decision-making. Founded in 2020, we bring together students from mathematics, economics, computer science, and beyond to study how rational actors interact in competitive and cooperative scenarios.
        </p>
        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          Game theory provides powerful tools for understanding everything from auction design to evolutionary biology, from political strategy to artificial intelligence. Our club offers a welcoming environment for both beginners and advanced students to deepen their understanding of these concepts.
        </p>

        <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange mt-12">
          Our Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
            <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Educate</h3>
            <p className="text-gray-600 leading-relaxed">
              Provide accessible introduction to game theory concepts through workshops and seminars.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
            <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Research</h3>
            <p className="text-gray-600 leading-relaxed">
              Support original student research and facilitate connections with faculty mentors.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
            <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              Build a community of students passionate about strategic thinking across disciplines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

