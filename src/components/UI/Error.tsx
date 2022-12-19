import { IconError } from "../../img/sprite";

// Error message component
// It takes in the message to be displayed as a prop

//message is a prop that is passed to the ErrorMessage component and it is a string

function ErrorMessage(props: { message: string }) {
  return (
    <div className="message message--error">
      <IconError />
      <p>Oops!... Something went wrong!</p>
      <p>Please try again later.</p>
      <p>{props.message}</p>
    </div>
  );
}

export default ErrorMessage;
