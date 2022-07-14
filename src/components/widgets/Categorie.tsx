import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { ShowCategory } from "../admin/TableProducts";

function Categories({ category }: any) {
  return (
    <div className='ContainerCategorie'>
      <div className='title'>
        <h3>
          {category === undefined || category === null ? (
            <>Categories: Toutes</>
          ) : (
            <>
              categorie: <ShowCategory category={category} />
            </>
          )}
        </h3>
      </div>

      <div className='content-input'>
        <input type='text' className='' placeholder='Chercher un produit' />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Categories;
