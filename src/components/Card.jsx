function Card({
  imgProfil,
  nomDeProfil,
  secondoryText,
  textProfil,
  subtitle,
  items,
}) {
  return (
    <div className="card">
      <div
        className="card-img"
        style={{ backgroundImage: `url(${imgProfil})` }}
      ></div>

      <div className="card-content">
        <h1 className="card-h1">{nomDeProfil}</h1>
        <h2>{secondoryText}</h2>
        <p>{textProfil}</p>
        <h3>{subtitle}</h3>
        <ul>
          {items.map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
