import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CollabScore() {
  const [score, setScore] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchScore() {
      try {
        // This is a placeholder URL. Replace with your actual API endpoint.
        const response = await axios.get('/api/collab-score')
        setScore(response.data.score)
      } catch (error) {
        console.error('Error fetching collaboration score:', error)
        setScore('Error')
      } finally {
        setLoading(false)
      }
    }
    fetchScore()
  }, [])

  return (
    <div className="collab-score">
      <h3>Collaboration Health Score</h3>
      {loading ? <p>Loading score...</p> : <p>{score}</p>}
    </div>
  )
}

export default CollabScore
