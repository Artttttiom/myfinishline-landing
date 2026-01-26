import './ChooseQuest.css'

const quests = [
  {
    id: 1,
    title: 'The Shire to Rivendell',
    category: 'Walking',
    distance: '458 km',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=500&fit=crop',
    color: '#22C55E'
  },
  {
    id: 2,
    title: 'Route 66 Adventure',
    category: 'Cycling',
    distance: '3,940 km',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=500&fit=crop',
    color: '#3B82F6'
  },
  {
    id: 3,
    title: 'Camino de Santiago',
    category: 'Walking',
    distance: '825 km',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&h=500&fit=crop',
    color: '#F59E0B'
  }
]

function ChooseQuest() {
  return (
    <section className="choose-quest" id="quests">
      <div className="container">
        <div className="section-header">
          <h2>Choose Your<br /><span className="text-gradient">Adventure Quest</span></h2>
          <p>Pick your virtual journey and start moving towards your goal</p>
        </div>

        <div className="quests-carousel">
          {quests.map(quest => (
            <div key={quest.id} className="quest-card">
              <div className="quest-image">
                <img src={quest.image} alt={quest.title} />
                <div className="quest-overlay">
                  <span className="quest-category" style={{ background: quest.color }}>
                    {quest.category}
                  </span>
                </div>
              </div>
              <div className="quest-info">
                <h3>{quest.title}</h3>
                <div className="quest-meta">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.333v13.334M1.333 8h13.334" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{quest.distance}</span>
                </div>
                <button className="quest-btn">
                  View Quest
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  )
}

export default ChooseQuest
