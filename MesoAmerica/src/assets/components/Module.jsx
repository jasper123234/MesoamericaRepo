import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Module({link,icon, x, y, z}) {
  return (
    <>
        <Link to={link}><img 
      src={icon}
      alt="Example Image"
      width="150"
      height="150"
      className={`absolute ${x} ${y} ${z}`}
    />
    </Link>
    </>
  );
}

export default Module;