import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ term, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      onClick={() => setIsFlipped(!isFlipped)} 
      style={{
        width: '300px',
        height: '200px',
        margin: '10px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: isFlipped ? '#f0f8ff' : '#fff',
      }}
    >
      <p style={{ fontSize: isFlipped ? '12px' : '18px' }}>
        {isFlipped ? definition : term}
      </p>
    </div>
  );
};

const DisplayCards = ({ terms }) => {
    console.log(terms);
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Object.entries(terms).map(([term, definition]) => (
            <Card key={term} term={term} definition={definition} />
        ))}
        {/*{loading ? (
          <p>Loading flashcards...</p>
        ) : (
          terms.map(flashcard => (
            <Card question={flashcard.question} answer={flashcard.answer} />
          ))
        )}*/}
      </div>
    );
  };

const Flashcards = ({terms}) => {
    /*const [terms, setTerms] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getFlashcards = async () => {
            try {
                const response = await fetch('http://localhost:5000/flashcards');
                const data = await response.json();
                setTerms(data);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getFlashcards(); // Call the function once when the component mounts
    }, []);*/

  return (
    <div>
      <DisplayCards terms={terms} />
    </div>
  );
}

export default Flashcards;
