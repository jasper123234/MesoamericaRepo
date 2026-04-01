function Module({link,icon, x, y}) {
  return (
    <img
      src={icon}
      alt="Example Image"
      width="150"
      height="150"
      className={`absolute ${x} ${y}`}
    />
  );
}

export default Module;