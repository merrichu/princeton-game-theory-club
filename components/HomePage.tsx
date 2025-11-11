interface HomePageProps {
  onNavigate?: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <section className="bg-gradient-to-br from-princeton-black to-gray-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Princeton Game Theory Club</h1>
          <p className="text-xl mb-8 text-gray-300 animate-fade-in-up animation-delay-200">
            Exploring strategic thinking, decision-making, and rational behavior
          </p>
          <button 
            onClick={() => onNavigate?.('about')}
            className="inline-block bg-princeton-orange text-white px-10 py-4 rounded-full font-bold transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-princeton-orange/30 animate-fade-in-up animation-delay-400 cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
              <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Weekly Seminars</h3>
              <p className="text-gray-600 leading-relaxed">
                Join us for engaging discussions on classical and modern game theory topics, from Nash equilibria to mechanism design.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
              <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Research Groups</h3>
              <p className="text-gray-600 leading-relaxed">
                Collaborate with fellow students on original research projects in game theory, economics, and computational applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
              <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Guest Speakers</h3>
              <p className="text-gray-600 leading-relaxed">
                Hear from leading academics and industry professionals about real-world applications of game theory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

