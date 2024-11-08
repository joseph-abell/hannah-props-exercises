import { useState } from 'react';
import { ChildComponent } from './components/ChildComponent';
import { CompiledCode } from './components/CompiledCode';

function App() {
  const [greetingMessage, setGreetingMessage] = useState<string>('');

  const handleGreet = (name: string) => {
    setGreetingMessage(
      `Hello, ${name}! Props successfully passed and handled.`
    );
  };

  const originalCode = `// ChildComponent.tsx
const ChildComponent = ({ name, age, hobbies, onGreet }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <div>
        Hobbies: 
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
      <button onClick={() => onGreet(name)}>
        Greet
      </button>
    </div>
  );
};`;

  const compiledCode = `// Compiled JavaScript
"use strict";
const ChildComponent = ({name, age, hobbies, onGreet}) => {
  return React.createElement("div", null,
    React.createElement("h2", null, "Child Component"),
    React.createElement("p", null, "Name: ", name),
    React.createElement("p", null, "Age: ", age),
    React.createElement("div", null, "Hobbies: ",
      React.createElement("ul", null,
        hobbies.map((hobby, index) =>
          React.createElement("li", {key: index}, hobby)
        )
      )
    ),
    React.createElement("button", {
      onClick: () => onGreet(name)
    }, "Greet")
  );
};`;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Exercise 1: Prop passing in JS
        </h2>

        <div>
          <p className="text-gray-600 mb-4">
            Challenge 1. Create a new JS file, and create a function called
            start. make start console log the text "Hello World";
          </p>

          <p className="text-gray-600 mb-4">
            Challenge 2. Create a function called age. When defining the
            function, pass it a property called yearOfBirth, which we can assume
            to be a positive integer. Use yearOfBirth and calculate what age the
            yearOfBirth would equal to, when comparing against a hardcoded year.
            When you have a value, console log it out. Make the start function
            call age with a number of your choice.
          </p>

          <p className="text-gray-600 mb-4">
            Challenge 3. Return a value from age, and update the console log in
            start to use the returned value. Make the console log say "Hello
            world, my age is 34", where 34 is your number of choice.
          </p>
        </div>
        <div className="space-y-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Exercise 2: React properties
            </h2>

            <p className="text-gray-600 mb-4">
              Challenge 4. Take a look at the react component below, and take a
              look at the code it uses below that. See the similarities between
              the JSX, and the compiled javascript. Try to describe the
              relationship between the two pieces of code.
            </p>
          </div>

          <ChildComponent
            name="Jane Doe"
            age={25}
            hobbies={['Reading', 'Coding', 'Gaming']}
            onGreet={handleGreet}
          />

          {greetingMessage && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
              {greetingMessage}
            </div>
          )}
        </div>

        <CompiledCode originalCode={originalCode} compiledCode={compiledCode} />
      </div>
    </div>
  );
}

export default App;
