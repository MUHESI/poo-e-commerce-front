import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/widgets/Button";
import InputWithIcon from "../../components/widgets/InputWithIcon";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { INIT_ADD_PRODUCT_FORM } from "../../constants/role";

// import React, { useEffect, useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& .MuiTextField-root": {
//         margin: theme.spacing(1),
//         width: "25ch"
//       }
//     }
//   })
// );

// const AddNewProduct = () => {
//   const [dataProduct, setDataProduct] = React.useState<any>({
//     ...INIT_ADD_PRODUCT_FORM
//   });
//   return (
//     <div className='mainContentAddProduct'>
//       <div>
//         <h4 className='title'> Ajout du nouveau produit </h4>
//         <p>Ces informations decriront le product </p>
//       </div>
//       <div className='group-fields'>
//         <TextField
//           id='outlined-search'
//           label='Search field'
//           type='search'
//           variant='outlined'
//         />
//         <TextField
//           id='outlined-search'
//           label='Search field'
//           type='search'
//           variant='outlined'
//         />
//       </div>
//     </div>
//   );
// };

// export default AddNewProduct;

const AddNewProduct = () => {
  const history = useHistory();
  const [state, setstate] = useState("");

  const [dataProduct, setDataProduct] = React.useState<any>({
    ...INIT_ADD_PRODUCT_FORM
  });
  //
  const currencies = [
    {
      value: "USD",
      label: "$"
    },
    {
      value: "EUR",
      label: "€"
    },
    {
      value: "BTC",
      label: "฿"
    },
    {
      value: "JPY",
      label: "¥"
    }
  ];
  return (
    <div className='mainContentAddProduct '>
      <div className='container'>
        <div className='content-form'>
          <div className='content-groupLoginwith '>
            <div className='content-body'>
              <h4>Ajout du nouveau produit </h4>
              <p>Ces informations decriront le product </p>
            </div>
          </div>
          <div className='content-fields'>
            <div className='field'>
              <InputWithIcon
                value={dataProduct.name}
                label='Nom du produit'
                fnOnChange={(e: any) =>
                  setDataProduct({ ...dataProduct, name: e.target.value })
                }
              />
            </div>
            <div className='field'>
              <InputWithIcon
                value={dataProduct.price}
                label='le prix '
                fnOnChange={(e: any) =>
                  setDataProduct({ ...dataProduct, price: e.target.value })
                }
              />
            </div>
            <div className='field'>
              <InputWithIcon
                value={dataProduct.solde}
                label='Le solde produit'
                fnOnChange={(e: any) =>
                  setDataProduct({ ...dataProduct, solde: e.target.value })
                }
              />
            </div>
            <div className='field'>
              <InputWithIcon
                value={dataProduct.remise}
                label='Remise du produit'
                fnOnChange={(e: any) =>
                  setDataProduct({ ...dataProduct, remise: e.target.value })
                }
              />
            </div>
            <div className='field'>
              <InputWithIcon
                value={dataProduct.quantity}
                label='Quantité du produit'
                fnOnChange={(e: any) =>
                  setDataProduct({ ...dataProduct, quantity: e.target.value })
                }
              />
            </div>
            <div className='field'>
              <TextField
                style={{ width: "55%" }}
                select
                label='Categorie du produit'
                onChange={(e: any) =>
                  setDataProduct({ ...dataProduct, category: e.target.value })
                }
                // value={currency}
                // onChange={handleChange}
                // helperText=' select your currency'
                // variant='filled'
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div className='content-textArea'>
            <textarea
              value={dataProduct.description}
              placeholder={"Décrir le produit"}
              onChange={(e: any) =>
                setDataProduct({
                  ...dataProduct,
                  description: e.target.value
                })
              }
            ></textarea>
          </div>

          <div className='content-actions margin-2'>
            <Button
              textBtn='Connexion'
              display='block'
              styleBtn={"btnPrimary"}
              actionTo={() => history.push("/blog")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
