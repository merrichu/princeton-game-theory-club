'use client'

interface NavbarProps {
  currentPage?: string
  onPageChange?: (page: string) => void
}

export default function Navbar({ currentPage = 'home', onPageChange }: NavbarProps) {
  const handleClick = (page: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onPageChange) {
      onPageChange(page)
    }
  }

  return (
    <nav className="bg-princeton-black py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleClick('home', e)} 
          className="text-white text-2xl font-bold"
        >
          Princeton <span className="text-princeton-orange">Game Theory</span>
        </a>
        <ul className="flex gap-8 list-none">
          <li>
            <a 
              href="#" 
              onClick={(e) => handleClick('home', e)}
              className={`transition-colors ${currentPage === 'home' ? 'text-princeton-orange' : 'text-white hover:text-princeton-orange'}`}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleClick('about', e)}
              className={`transition-colors ${currentPage === 'about' ? 'text-princeton-orange' : 'text-white hover:text-princeton-orange'}`}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleClick('events', e)}
              className={`transition-colors ${currentPage === 'events' ? 'text-princeton-orange' : 'text-white hover:text-princeton-orange'}`}
            >
              Events
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleClick('resources', e)}
              className={`transition-colors ${currentPage === 'resources' ? 'text-princeton-orange' : 'text-white hover:text-princeton-orange'}`}
            >
              Resources
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleClick('team', e)}
              className={`transition-colors ${currentPage === 'team' ? 'text-princeton-orange' : 'text-white hover:text-princeton-orange'}`}
            >
              Team
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => handleClick('contact', e)}
              className={`transition-colors ${currentPage === 'contact' ? 'text-princeton-orange' : 'text-white hover:text-princeton-orange'}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

