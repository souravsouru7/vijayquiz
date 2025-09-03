import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { LEVELS, QUESTIONS, PASSING_RULE } from './data/questions'

function App() {
  const [levelIndex, setLevelIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [selections, setSelections] = useState([])
  const [showSummary, setShowSummary] = useState(false)
  const [finished, setFinished] = useState(false)

  const currentLevelKey = LEVELS[levelIndex]
  const questions = QUESTIONS[currentLevelKey]
  const passing = PASSING_RULE[currentLevelKey]
  const currentQuestion = questions[questionIndex]
  const correctCount = useMemo(() => {
    return selections.reduce((acc, sel, idx) => {
      if (sel === undefined || sel === null) return acc
      return acc + (sel === questions[idx]?.correctIndex ? 1 : 0)
    }, 0)
  }, [selections, questions])

  const progressText = useMemo(() => {
    return `${currentLevelKey.toUpperCase()} ${questionIndex + 1}/${questions.length}`
  }, [currentLevelKey, questionIndex, questions.length])

  function handleSelect(optionIdx) {
    if (showSummary) return
    setSelectedIndex(optionIdx)
  }

  function handleNext() {
    if (selectedIndex === null || showSummary) return
    const updated = [...selections]
    updated[questionIndex] = selectedIndex
    setSelections(updated)
    const nextIndex = questionIndex + 1
    if (nextIndex < questions.length) {
      setQuestionIndex(nextIndex)
      setSelectedIndex(null)
      return
    }
    // Level complete, show summary with answers and markings
    setShowSummary(true)
  }

  function handleRestart() {
    setLevelIndex(0)
    setQuestionIndex(0)
    setSelectedIndex(null)
    setSelections([])
    setShowSummary(false)
    setFinished(false)
  }

  function handleContinueAfterSummary() {
    const passed = correctCount >= passing.requiredCorrect
    if (!passed) {
      // Retry same level
      setQuestionIndex(0)
      setSelectedIndex(null)
      setSelections([])
      setShowSummary(false)
      return
    }
    const isLastLevel = levelIndex === LEVELS.length - 1
    if (isLastLevel) {
      setFinished(true)
      return
    }
    setLevelIndex((i) => i + 1)
    setQuestionIndex(0)
    setSelectedIndex(null)
    setSelections([])
    setShowSummary(false)
  }

  useEffect(() => {
    // Reset selections when level changes
    setSelections([])
    setSelectedIndex(null)
    setQuestionIndex(0)
    setShowSummary(false)
  }, [levelIndex])

  return (
    <div className="quiz-container">
      <h1>Business Analytics Level Quiz</h1>
      {finished ? (
        <div className="panel">
          <p>Congrats! You passed all levels.</p>
          <button className="primary" onClick={handleRestart}>Restart</button>
        </div>
      ) : showSummary ? (
        <div className="panel">
          <div className="subheader">
            <span className="badge">{currentLevelKey.toUpperCase()} SUMMARY</span>
            <span>Score: {correctCount}/{questions.length}</span>
          </div>
          <div className="summary-list">
            {questions.map((q, idx) => {
              const userSel = selections[idx]
              const correctIdx = q.correctIndex
              const isCorrect = userSel === correctIdx
              return (
                <div key={q.id} className={`summary-item ${isCorrect ? 'ok' : 'not-ok'}`}>
                  <div className="summary-question">{idx + 1}. {q.question}</div>
                  <div className="summary-options">
                    {q.options.map((opt, oidx) => {
                      const isCorrectOpt = oidx === correctIdx
                      const isUserOpt = oidx === userSel
                      const className = [
                        'summary-option',
                        isCorrectOpt ? 'correct' : '',
                        !isCorrect && isUserOpt && !isCorrectOpt ? 'wrong' : '',
                      ].filter(Boolean).join(' ')
                      return (
                        <div key={oidx} className={className}>
                          {opt}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="explanation muted">Answers and markings are revealed after completing the level.</div>
          <div className="summary-actions">
            <button className="primary" onClick={handleContinueAfterSummary}>
              {correctCount >= passing.requiredCorrect ? 'Continue to next level' : 'Retry this level'}
            </button>
            <button onClick={handleRestart}>Restart</button>
          </div>
          <div className="footer">
            <span>Passing rule: {passing.requiredCorrect}/{passing.total} correct to advance</span>
            <span>Level: {currentLevelKey}</span>
          </div>
        </div>
      ) : (
        <div className="panel">
          <div className="subheader">
            <span className="badge">{progressText}</span>
            <span>Answered: {selections.filter((s) => s !== undefined && s !== null).length}/{questions.length}</span>
          </div>
          <div className="question">{currentQuestion.question}</div>
          <div className="options">
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = selectedIndex === idx
              const className = ['option', isSelected ? 'selected' : ''].filter(Boolean).join(' ')
              return (
                <button
                  key={idx}
                  className={className}
                  onClick={() => handleSelect(idx)}
                >
                  {opt}
                </button>
              )
            })}
          </div>
          <button className="primary" onClick={handleNext} disabled={selectedIndex === null}>Save & Next</button>
          <div className="footer">
            <span>Passing rule: {passing.requiredCorrect}/{passing.total} correct to advance</span>
            <span>Level: {currentLevelKey}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
