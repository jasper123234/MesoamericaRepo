import { Link, useNavigate } from "react-router-dom";

function BackButton({ link }) {
  const navigate = useNavigate();

  const buttonClass = "inline-flex items-center justify-center w-20 border border-yellow-800 mt-3 shadow-md rounded-2xl hover:shadow-xl text-yellow-900 bg-white/80 hover:bg-white";

  if (link) {
    return (
      <Link to={link} className={buttonClass}>
        Back
      </Link>
    );
  }

  return (
    <button type="button" onClick={() => navigate(-1)} className={buttonClass}>
      Back
    </button>
  );
}

export default BackButton;