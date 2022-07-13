import React, { useEffect } from "react";
import Button from "../../components/widgets/Button";
import InputWithIcon from "../../components/widgets/InputWithIcon";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { INIT_ADD_PRODUCT_FORM } from "../../constants/role";
import { validateFormCreateProduct } from "../../services/validForm/validateProducts";
import { postAPI } from "../../components/utils/FetchData";
import { showToast } from "../../components/shared/ToastAlert";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/actions/category.action";

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state: any) => state.categories);
  const [dataProduct, setDataProduct] = React.useState<any>({
    ...INIT_ADD_PRODUCT_FORM
  });

  const createProduct = async () => {
    const resValid = validateFormCreateProduct(dataProduct);
    if (resValid.status === "SUCCESS") {
      try {
        const res: any = await postAPI("produits/", dataProduct);
        if (
          res.data.status === 201 &&
          Object.keys(res.data.result).length > 0
        ) {
          showToast({ message: res.data.message, typeToast: "success" });
          setDataProduct({ ...INIT_ADD_PRODUCT_FORM });
        } else {
          console.log("THIS FORM IS INCORRECT");
        }
      } catch (error: any) {
        showToast({ message: error.response.data.message, typeToast: "error" });
      }
    }
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className='mainContentAddProduct '>
      <div className='container'>
        <div className='content-form'>
          <div className='content-groupLoginwith '>
            <div className='content-body'>
              <h4>Création du nouveau produit </h4>
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
                label={`${
                  allCategories.isLoadingInfo
                    ? "Chargement... "
                    : "Categorie du produit"
                }`}
                onChange={(e: any) =>
                  setDataProduct({ ...dataProduct, category: e.target.value })
                }
              >
                {allCategories?.categories?.map((item: any, key: number) => (
                  <MenuItem key={key} value={item.id}>
                    {item.libelle}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>

          <div className='field-textarea'>
            <label>Déscription </label>
            <textarea
              value={dataProduct.description}
              placeholder={"Décrir le produit"}
              onChange={(e: any) =>
                setDataProduct({
                  ...dataProduct,
                  description: e.target.value
                })
              }
            />
          </div>

          <div className='content-actions margin-2'>
            <Button
              textBtn='Créer le produit'
              display='block'
              styleBtn={"btnPrimary"}
              actionTo={() => createProduct()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
