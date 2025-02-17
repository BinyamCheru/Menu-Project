import { useState } from "react";
import Title from "./Title";
import items from "./data";
import Menu from "./Menu";

const App = () => {
  const [menuItem, setMenuItems] = useState(items);
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Menu items={menuItem} />
      </section>
    </main>
  );
};
export default App;
