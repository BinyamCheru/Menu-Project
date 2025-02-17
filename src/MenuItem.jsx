const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className="item-info">
      <img src={img} alt={title} className="img" />
      <header>
        <h5> {title} </h5>
        <span className="item-price">${price}</span>
        <p className="item-text">{desc} </p>
      </header>
    </article>
  );
};
export default MenuItem;
