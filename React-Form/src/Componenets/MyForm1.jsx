import React from 'react';
import { useFormStatus } from 'react-dom';  // Import the hook

function MyForm1() {
  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted...');
    // Simulate a delay like a network request
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submission complete.');
  };

  // Using useFormStatus hook to track form status
  const { pending } = useFormStatus(); 
  console.log(">>>>>>", pending) // This provides the 'pending' state

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />
        <br />
        {/* Button disabled when form is pending */}
        <button type="submit" disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default MyForm1;
