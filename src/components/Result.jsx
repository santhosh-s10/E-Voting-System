import React from 'react'

const Result = () => {
    
const candidates = [
    {
      name: "Narendra Modi",
      party: "Bharatiya Janata Party",
      votes: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Bharatiya_Janata_Party_%28icon%29.svg/800px-Bharatiya_Janata_Party_%28icon%29.svg.png", // Replace with actual logo URL
    },
    {
      name: "Ragul Gandhi",
      party: "Indian National Congress",
      votes: 0,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Indian_National_Congress_hand_logo.svg/800px-Indian_National_Congress_hand_logo.svg.png",
    },
    {
      name: "Ather Jamal Lari",
      party: "Bahujan Samaj Party",
      votes: 0,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Elephant_Bahujan_Samaj_Party.svg",
    },
    {
      name: "Kolisetty Shiva Kumar",
      party: "Yuga Thulasi Party",
      votes: 0,
      logo: "https://pbs.twimg.com/profile_images/1863434970582142976/0JHxrc7d_400x400.jpg",
    },
  ];
  return (
    <div className="results-container">
      <h2 className="results-title">Results</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Party</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td className="candidate-info">
                <img src={candidate.logo} alt={candidate.name} className="party-logo" />
                {candidate.name}
              </td>
              <td>{candidate.party}</td>
              <td className="vote-count">{candidate.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Result