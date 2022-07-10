import { STATUS_COMMAND } from "../components/porfolio/constants";
import { IPanier } from "./types/commandTypes";

const panierDefault: IPanier[] = [];

const initialState = {
  // USERS
  users: {
    currentUser: {
      isLoadingInfo: false,
      error: null,
      user: {}
    },
    allClients: {
      isLoadingInfo: false,
      error: null,
      clients: []
    }
  },
  // CATEGORIES
  categories: {
    allCategories: {
      isLoadingInfo: false,
      error: null,
      categories: []
    }
  },
  // PRODUCTS
  products: {
    allProducts: {
      currentCategory: null,
      isLoadingInfo: false,
      error: null,
      products: []
    },
    infoProduct: {
      isLoadingInfo: false,
      error: null,
      product: {}
    }
  },

  //
  commands: {
    allCommands: {
      isLoadingInfo: false,
      error: null,
      commands: [
        {
          amount: 0,
          status: "",
          panier: "",
          user_id: ""
        }
      ]
    },
    createCommand: {
      isLoadingInfo: false,
      error: null,
      command: {
        amount: 0,
        user: null,
        created: "",
        status: STATUS_COMMAND.ONPENDING,
        panier: [...panierDefault]
        /* {
          nameProduct: "",
          product: 0,
          options: "",
          quantity: 0,
          priceUnit: 0,
          total: 0
        } */
      }
    }
  }
};
export default initialState;
