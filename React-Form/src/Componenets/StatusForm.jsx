import { useFormStatus } from "react-dom";
import { submitForm } from "./Actions";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function Form({ action }) {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}

export default function StatusForm() {
  return <Form action={submitForm} />;
}
