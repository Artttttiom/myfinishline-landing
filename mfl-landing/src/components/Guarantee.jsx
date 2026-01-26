import './Guarantee.css'

function Guarantee() {
  return (
    <section className="guarantee">
      <div className="container">
        <div className="guarantee-card">
          <div className="guarantee-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3"/>
              <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="guarantee-content">
            <h3>Money-Back Guarantee</h3>
            <p>
              Not satisfied with your quest experience? We offer a full refund within 30 days of purchase.
              No questions asked – your satisfaction is our priority.
            </p>
          </div>

          <div className="guarantee-badge">
            <span className="badge-number">30</span>
            <span className="badge-label">Days</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guarantee
