import { useState } from "react";
import Title from "./Title";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories = items.map((item) => item.category);
// console.log(tempCategories);
// const tempSet = new Set(tempCategories);
// console.log(tempSet);
// const tempItems = ["all", ...tempSet];
// console.log(tempItems);

// shorter way to filter unique categories
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

const App = () => {
  const [menuItem, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  // console.log(categories);

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
};
export default App;
