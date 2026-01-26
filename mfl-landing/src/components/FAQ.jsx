import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: 'How does MyFinishLine track my activity?',
    answer: 'MyFinishLine integrates with popular fitness apps and devices like Strava, Garmin, Fitbit, Apple Health, and Google Fit. Your activities are automatically synced to track progress on your quest.'
  },
  {
    question: 'Can I participate without a fitness tracker?',
    answer: 'Yes! You can manually log your activities through our app or website. Simply enter your distance, and it will count towards your quest progress.'
  },
  {
    question: 'What activities count towards my progress?',
    answer: 'Walking, running, cycling, swimming, and hiking all count. Some quests also accept other activities like rowing, elliptical, or wheelchair pushing.'
  },
  {
    question: 'Can I do quests with friends or family?',
    answer: 'Absolutely! You can create teams and work together towards a shared goal, or compete to see who finishes first. It\'s a great way to stay motivated.'
  },
  {
    question: 'Is there a time limit to complete a quest?',
    answer: 'No time limits! Go at your own pace. Whether it takes you weeks or months, your progress is saved and waiting for you.'
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently asked questions</h2>
          <p>Everything you need to know about MyFinishLine</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
