import React, { useState } from 'react';
import { useFormStatus } from 'react-dom';

const FormWithLoader = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setSubmittedData(data);
  };

  const { pending } = useFormStatus();

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label>
        Email:
        <input name="email" type="email" required />
      </label>
      
      {pending && <div className="spinner">Loading...</div>}

      <button type="submit" disabled={pending}>
        Submit
      </button>

      {submittedData && (
        <div>
          <h3>Form Submitted!</h3>
          <p>{JSON.stringify(submittedData)}</p>
        </div>
      )}
    </form>
  );
};

export default FormWithLoader;