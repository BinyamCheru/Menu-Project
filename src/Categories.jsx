const Categories = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button type="button" key={category} className="btn">
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
