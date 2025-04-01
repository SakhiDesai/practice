// import React from "react";
// import { useFormStatus } from 'react-dom';

// function MyForm() {
//   const handleSubmit = async (e) => {
//     e.preventDefault(); 
//     await new Promise((response) => setTimeout(response, 2000)); 
//     console.log(">>>>>>>>>>submit");
//   };

//   function CustomerForm() { 
//     const { pending } = useFormStatus(); 
//     console.log(">>>>>>> pending:", pending);

//     return (
//       <>
//         <label htmlFor="name">Name:</label> 
//         <input type="text" name="name" />
//         <br />
//         <br />
//         <label htmlFor="email">Email:</label> 
//         <input type="text" name="email" />
//         <br />
//         <br />
//         <button disabled={pending}>Submit</button>
//       </>
//     );
//   }

//   return (
//     <div>
//       <h1>My Form</h1>
//       <form onSubmit={handleSubmit}> 
//         <CustomerForm />
//       </form>
//     </div>
//   );
// }

// export default MyForm;


import React, { useState } from "react";
import { useFormStatus } from "react-dom";

// Simulate a form submission action (e.g., API call)
async function submitForm() {
  await new Promise((res) => setTimeout(res, 2000)); // Simulating a delay (e.g., server request)
}

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { pending, setPending } = useFormStatus(); // Destructure pending state from useFormStatus

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
    setPending(true); // Set pending to true when submission starts

    // Simulate the form submission (e.g., API call)
    await submitForm();
    console.log("Form submitted...");

    setPending(false); // Set pending to false when submission is complete
  };

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default MyForm;
