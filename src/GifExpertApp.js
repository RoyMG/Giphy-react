import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ;
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>

      <ol>
        {categories.map((category) => {
          return <GifGrid category={category} key={category}></GifGrid>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
