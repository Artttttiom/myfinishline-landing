import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3.5L17.5 10.5H24.5L19.25 15.75L21 23.333L14 19.25L7 23.333L8.75 15.75L3.5 10.5H10.5L14 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Choose Your Quest',
    description: 'Browse our collection of virtual adventures and pick one that excites you'
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4.667" y="3.5" width="18.667" height="21" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9.333 10.5H18.667M9.333 14H18.667M9.333 17.5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Track Activity',
    description: 'Connect your favorite fitness app or manually log your workouts'
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4.667 14L11.667 21L24.5 8.167" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Unlock Stories',
    description: 'As you progress, discover new chapters and achievements along the way'
  },
  {
    number: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 7v7l4.667 2.333" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Earn Rewards',
    description: 'Complete your quest and receive exclusive medals and certificates'
  }
]

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How it works</h2>
          <p>Get started in four simple steps</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
