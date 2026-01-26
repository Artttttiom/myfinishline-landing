import './Trusted.css'

const logos = [
  { name: 'Strava', icon: 'S' },
  { name: 'Garmin', icon: 'G' },
  { name: 'Fitbit', icon: 'F' },
  { name: 'Apple', icon: 'A' },
  { name: 'Nike', icon: 'N' },
  { name: 'Adidas', icon: 'Ad' }
]

function Trusted() {
  return (
    <section className="trusted">
      <div className="container">
        <div className="section-header">
          <h2>Trusted by athletes worldwide</h2>
          <p>Integrated with the apps and devices you already use</p>
        </div>

        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <div className="logo-placeholder">{logo.icon}</div>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trusted
