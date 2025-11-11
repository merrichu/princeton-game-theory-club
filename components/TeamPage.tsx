export default function TeamPage() {
  const teamMembers = [
    { initials: 'AJ', name: 'Alex Johnson', role: 'President', year: 'Economics \'26' },
    { initials: 'SP', name: 'Sophia Patel', role: 'Vice President', year: 'Mathematics \'26' },
    { initials: 'MC', name: 'Marcus Chen', role: 'Events Coordinator', year: 'Computer Science \'27' },
    { initials: 'EN', name: 'Emma Nguyen', role: 'Research Lead', year: 'ORFE \'26' },
    { initials: 'DB', name: 'David Brown', role: 'Treasurer', year: 'Economics \'27' },
    { initials: 'LK', name: 'Lila Kumar', role: 'Communications', year: 'Politics \'26' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
          Our Team
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Meet the dedicated students leading Princeton Game Theory Club.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-princeton-orange to-orange-700 mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                {member.initials}
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <div className="text-princeton-orange text-sm mb-2">{member.role}</div>
              <p className="text-gray-600">{member.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

