'use client'

import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation'

export default function HomePage() {
  return (
    <div className="bg-gtc-cream">
      <section id="home" className="px-6 pt-12 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gtc-brown/60">Homepage</p>
          <ScrollAnimation immediate>
            <h1 className="mt-6 font-display text-4xl md:text-5xl text-gtc-brown tracking-[0.08em]">
              PRINCETON
              <span className="block text-princeton-orange">GAME THEORY CLUB</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation immediate delay={0.1}>
            <p className="mt-4 text-lg text-gtc-ink/80">
              Fostering a community built on a shared love of puzzles and strategy.
            </p>
          </ScrollAnimation>
          <ScrollAnimation immediate delay={0.2}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-gtc-beige shadow-sm">
              <img
                src="/IMG_0171.JPG"
                alt="Students gathered for a club meeting"
                className="h-64 w-full object-cover md:h-80"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation immediate delay={0.3}>
            <div className="mt-6 flex justify-center gap-6 text-2xl text-princeton-orange/70">
              <img alt="Heart suit" className="h-6 w-6" src="/suit_heart.png" />
              <img alt="Club suit" className="h-6 w-6" src="/suit_club.png" />
              <img alt="Diamond suit" className="h-6 w-6" src="/suit_diamond.png" />
              <img alt="Spade suit" className="h-6 w-6" src="/suit_spade.png" />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <ScrollAnimation direction="up">
            <h2 className="font-display text-3xl text-gtc-brown tracking-[0.08em]">WHO WE ARE</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-gtc-ink/80">
              The Princeton Game Theory Club is a community of students passionate about strategic thinking,
              decision-making, and rational behavior. We explore the fascinating world of game theory through
              discussions, puzzles, and collaborative problem-solving. Whether you&apos;re a seasoned strategist
              or just curious about how people make decisions, you&apos;ll find a welcoming environment to learn and grow.
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation direction="fade" delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-gtc-beige shadow-sm">
            <img
              src="/IMG_0242.JPG"
              alt="A student holding a hand of cards"
              className="h-72 w-full object-cover"
            />
          </div>
        </ScrollAnimation>
      </section>

      <section id="events" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <ScrollAnimation direction="fade">
          <div className="overflow-hidden rounded-2xl border border-gtc-beige shadow-sm md:order-none order-2">
            <img
              src="/IMG_0182.JPG"
              alt="Students collaborating in a classroom"
              className="h-72 w-full object-cover"
            />
          </div>
        </ScrollAnimation>
        <div className="md:order-none order-1">
          <ScrollAnimation direction="up">
            <h2 className="font-display text-3xl text-gtc-brown tracking-[0.08em]">WEEKLY MEETINGS</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-gtc-ink/80">
              Join us every week for engaging discussions, strategic puzzles, and collaborative learning. Our meetings
              are open to all Princeton students, regardless of experience level. We cover topics ranging from classic
              game theory concepts to modern applications in economics, politics, and everyday decision-making.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section id="puzzles" className="max-w-6xl mx-auto px-6 py-16">
        <ScrollAnimation direction="up">
          <h2 className="font-display text-3xl text-gtc-brown tracking-[0.08em]">PUZZLES</h2>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-gtc-ink/80 max-w-3xl">
            Puzzles are our favorite way to practice strategic thinking. We host friendly competitions, work through
            classic paradoxes, and build intuition for equilibrium concepts with hands-on challenges.
          </p>
        </ScrollAnimation>
        <StaggerContainer className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Iterated prisoner's dilemma challenges",
            'Auction design and voting puzzles',
            'Logic games, riddles, and matchups',
          ].map((item) => (
            <StaggerItem key={item}>
              <div className="rounded-xl border border-gtc-beige bg-white/60 p-6 text-sm text-gtc-ink/80 shadow-sm">
                {item}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section id="support" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <ScrollAnimation direction="up">
            <h2 className="font-display text-3xl text-gtc-brown tracking-[0.08em]">SUPPORT US</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-gtc-ink/80">
              Help us bring more speakers, puzzles, and opportunities to campus. You can support the club by
              sharing resources, sponsoring events, or connecting us with faculty and alumni working in game theory.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-princeton-orange">
              Reach us at gametheory@princeton.edu
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation direction="fade" delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-gtc-beige shadow-sm">
            <img
              src="/IMG_0345.JPG"
              alt="Club members chatting after a game night"
              className="h-72 w-full object-cover"
            />
          </div>
        </ScrollAnimation>
      </section>

      <section id="join" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="md:order-none order-2">
          <ScrollAnimation direction="fade">
            <div className="overflow-hidden rounded-2xl border border-gtc-beige shadow-sm">
              <img
                src="/IMG_0354.JPG"
                alt="Club members celebrating together"
                className="h-72 w-full object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
        <div className="md:order-none order-1">
          <ScrollAnimation direction="up">
            <h2 className="font-display text-3xl text-gtc-brown tracking-[0.08em]">JOIN US!</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-gtc-ink/80">
              Join us for weekly meetings, strategic puzzles, and collaborative learning. Our doors are open to all
              Princeton students who are curious about game theory, from first-years to graduate students.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <a
              href="mailto:gametheory@princeton.edu?subject=Join%20the%20Club"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-princeton-orange px-6 py-2 text-sm uppercase tracking-[0.3em] text-princeton-orange transition-colors hover:bg-princeton-orange hover:text-white"
            >
              Join the mailing list
            </a>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
