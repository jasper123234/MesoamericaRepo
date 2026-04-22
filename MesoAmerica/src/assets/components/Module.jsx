import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Module({link,icon, x, y}) {
  return (
    <>
        <Link to={link}><img 
      src={icon}
      alt="Example Image"
      width="150"
      height="150"
      className={`absolute ${x} ${y}`}
    />
    </Link>
    </>
  );
}

export default Module;