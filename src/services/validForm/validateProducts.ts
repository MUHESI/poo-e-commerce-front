import { showToast } from "../../components/shared/ToastAlert";

const ERROR = "Error";

export const validateFormCreateProduct = (formData: any) => {
  if (formData.description.trim().length <= 5) {
    showToast({
      message: "Completez la description svp.",
      typeToast: "error"
    });
    return { refOfField: "descritption", status: ERROR };
  }
  if (formData.name.trim().length <= 2) {
    showToast({
      message: "Completez le nom svp.",

      typeToast: "error"
    });
    return { refOfField: "name", status: ERROR };
  }
  if (formData.price <= 0) {
    showToast({
      message: "Completez le nom du produit svp.",

      typeToast: "error"
    });
    return { refOfField: "name", status: ERROR };
  }
  if (formData.solde <= 0) {
    showToast({
      message: "Completez le solde du produit svp.",

      typeToast: "error"
    });
    return { refOfField: "solde", status: ERROR };
  }
  if (formData.remise <= 0) {
    showToast({
      message: "Completez le champ remise du produit svp.",

      typeToast: "error"
    });
    return { refOfField: "remise", status: ERROR };
  }
  return { refOfField: "remise", status: "SUCCESS" };
};
