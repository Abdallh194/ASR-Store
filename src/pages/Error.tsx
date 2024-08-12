import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <LottieHandler type="not_found" />
      <Link to="/" replace={true}>
        Back
      </Link>
    </div>
  );
};

export default Error;
