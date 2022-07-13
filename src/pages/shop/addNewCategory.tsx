import React from "react";
import Button from "../../components/widgets/Button";
import { postAPI } from "../../components/utils/FetchData";
import { showToast } from "../../components/shared/ToastAlert";
import SaveIcon from "@material-ui/icons/Save";

const AddNewCategory = () => {
  const [dataCategory, setDataCategory] = React.useState<any>({
    libelle: "",
    description: ""
  });

  const createCategory = async () => {
    if (
      dataCategory.libelle.trim().length < 3 &&
      dataCategory.description.trim().length < 5
    ) {
      return showToast({
        message: "Veiller completer tous les champs avec des bonnes valeurs ",
        typeToast: "error"
      });
    }
    try {
      const res: any = await postAPI("categories/", dataCategory);
      if (res.data.status === 200) {
        showToast({ message: res.data.message, typeToast: "success" });
        setDataCategory({ Libelle: "", description: "" });
      } else {
        showToast({ message: res.data.message, typeToast: "success" });
      }
    } catch (error: any) {
      showToast({
        message: error.response.data.message,
        typeToast: "error"
      });
    }
  };

  return (
    <div className='mainContentAddProduct '>
      <div className='container'>
        <div className='content-form'>
          <div className='content-groupLoginwith '>
            <div className='content-body'>
              <h4>Création du nouveau categorie </h4>
              <p>Ces informations decriront la categorie </p>
            </div>
          </div>
          <div className='content-fields'>
            <div className='field-input'>
              <label className='left'>Libelle </label>

              <input
                value={dataCategory.libelle}
                onChange={(e: any) =>
                  setDataCategory({ ...dataCategory, libelle: e.target.value })
                }
              />
            </div>
          </div>

          <div className='field-textarea'>
            <label>Déscription </label>
            <textarea
              value={dataCategory.description}
              placeholder={"Décrir le produit"}
              onChange={(e: any) =>
                setDataCategory({
                  ...dataCategory,
                  description: e.target.value
                })
              }
            />
          </div>

          <div className='content-actions margin-2'>
            <Button
              textBtn='Créer categorie'
              display='block'
              styleBtn={"btnPrimary"}
              actionTo={() => createCategory()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategory;
