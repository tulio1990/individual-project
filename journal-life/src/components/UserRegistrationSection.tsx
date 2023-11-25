import React, { useState } from 'react';

const UserRegistrationSection: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleRegistration = () => {
   
    console.log(`User register: ${username}`);
  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Join us!</h2>
      <p>Sign up to start your own personal journal at Journal of Life.</p>
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="User name"
          className="p-2 border border-gray-300 mr-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={handleRegistration}
        >
          Registrarse
        </button>
      </div>
    </section>
  );
};

export default UserRegistrationSection;
