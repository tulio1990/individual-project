import React, { useState } from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
  const [newEntry, setNewEntry] = useState<string>('');

  const handleAddEntry = () => {
  
    console.log(`New Entry: ${newEntry}`);
    setNewEntry('');
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto my-8">
        <textarea
          className="w-full p-2 border border-gray-300"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Type your new entry..."
        />
        <button
          className="bg-green-500 text-white py-2 px-4 mt-2"
          onClick={handleAddEntry}
        >
          Add Entry
        </button>
      </div>
      {/* ********** */}
    </div>
  );
};

export default Home;
