import React, { useState } from 'react';
import parliament from '../assets/parliament.avif';
import { Link } from 'react-router-dom';

const ListOfCandidate = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Sample Data (Image, Title, Description)
  const options = [
    {
      id: 1,
      title: "Narendra Modi",
      description: "Bharatiya Janata Party",
      image: "https://tse3.mm.bing.net/th?id=OIP.jTa9Xu0aVK7Dirlg5luB3AHaHw&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      title: "Ajay Rai",
      description: "Indian National Congress",
      image: "https://1.bp.blogspot.com/-RAxJ-oc6JGg/TjJ5PWXk6DI/AAAAAAAAAJw/nYi3Nsvui8Q/s1600/congress_india_logo.jpg",
    },
    {
      id: 3,
      title: "Ather Jamal Lari",
      description: "Bahujan Samaj Party",
      image: "https://allpngfree.com/thumbnail/bahujan-samaj-party-logo-png-images--thumbnail-1673701310.jpg",
    },
    {
      id: 4,
      title: "Kolisetty Shiva Kumar",
      description: "Yuga Thuasi Party",
      image: "https://tse1.mm.bing.net/th?id=OIP.MMrhJddAJURE4o8ecUKNwwHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      title: "Gagan Prakash Yadav",
      description: "Apna Dal",
      image: "https://apnadals.weebly.com/uploads/1/2/5/4/125494241/editor/logo.png?1561372265",
    },
  ];

  return (
    <div className="candidates-container">
      <h1>List of Candidates</h1>
      
      <div className="parliament-container">
        <img src={parliament} alt="parliament" className="parliament-img" />
        <p className="parliament-text">Parliament Election - 2025</p>
      </div>

      <div className="radio-container">
        <h2>Candidates (Salem)</h2>
        {options.map((option) => (
          <label key={option.id} className="radio-option">
            <img src={option.image} alt={option.title} className="option-image" />
            <div className="option-content">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
            <input
              type="radio"
              name="votingMethod"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              className="radio-button"
            />
          </label>
        ))}
      </div>

      <div>
        <Link to='/candidateprofile'><input type="button" name="" id="confirm-candidate-btn" value={'Confirm Candidate'} /></Link>
      </div>
    </div>
  );
};

export default ListOfCandidate;
