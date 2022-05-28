import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 ** it shows the toast notification
 * ? if you don't specify  {autoClose : false} in the object , >> autoClose will be automatic after 5sec*
 * todo : Task done and finished
 * @param args  this method take a object { message:"Muhesi merci", typeToast: "dark", autoClose: false}
 * @throws Exception
 */
interface Imessage {
  message: string;
  typeToast: string;
  autoClose?: boolean | number;
}
interface IOptionsAlert {
  position?: any;
  autoClose?: any;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  Transition?: string;
  progress?: number;
  typeToast?: string;
  message?: string;
}
toast.configure();
export const showToast = (message: Imessage) => {
  let options: IOptionsAlert = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    Transition: "slide",
  };
  if (message.autoClose === false) options = { ...options, progress: 1 };
  // info  success  warning error default dark

  switch (message.typeToast) {
    case "warn":
      return toast.warn(message.message, options);

    case "info":
      return toast.info(message.message, options);
    case "success":
      return toast.success(message.message, options);
    case "error":
      return toast.error(message.message, options);
    case "dark":
      return toast.dark(message.message, options);
    default:
      return toast.info(message.message, options);
  }
};

export const SUCCESS = "success";
export const ERROR = "error";
export const WARN = "warn";
export const DARK = "dark";
export const INFO = "info";

// ctrl + Shift + k :supprimer une ligne sans copier

// ctrl + Shift + / : creer des commentaires

// ctrl + Shift + < : pour le overview de ficher

// Alt + flecheHaut ou  Bas : pur deplacer l'

// ctrl + D : pour selection  le meme nom dans le fichier

// ---------------------------

// ctrl + * : spliting du fichier
