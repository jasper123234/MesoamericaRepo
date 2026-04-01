function Module({link, icon, x, y }) {
  return (
    <div>
      <a href= {link}> 
        <img
          src={icon}
          alt="Example Image"
          width="150"
          height="150"
          className={`absolute ${x} ${y}`}
        />
     </a>

    </div>
  );
}

export default Module;