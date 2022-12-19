// Loading message component
// It takes in the message to be displayed as a prop

import { IconLoading } from "../../img/sprite";

function LoadingMessage() {
  return (
    <div className="message message--loading">
      <IconLoading />
      <p>Loading products...</p>
    </div>
  );
}

export default LoadingMessage;
