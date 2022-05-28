import React from "react";
import SearchIcon from "@material-ui/icons/Search";

function Categories() {
  return (
    <div className='ContainerCategorie'>
      <div className='title'>
        <h3> Categories: tous </h3>
      </div>

      <div className='content-input'>
        <input type='text' className='' placeholder='Chercher un produit' />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Categories;
