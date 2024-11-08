import React from 'react';

interface ChildProps {
  name: string;
  age: number;
  hobbies: string[];
  onGreet: (name: string) => void;
}

export const ChildComponent: React.FC<ChildProps> = ({ name, age, hobbies, onGreet }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Child Component</h2>
      <div className="space-y-2">
        <p className="text-gray-700">Name: <span className="font-semibold">{name}</span></p>
        <p className="text-gray-700">Age: <span className="font-semibold">{age}</span></p>
        <div className="text-gray-700">
          Hobbies: 
          <ul className="list-disc ml-5">
            {hobbies.map((hobby, index) => (
              <li key={index} className="text-gray-600">{hobby}</li>
            ))}
          </ul>
        </div>
        <button 
          onClick={() => onGreet(name)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Greet
        </button>
      </div>
    </div>
  );
};