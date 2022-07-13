import { commandModel, STATUS_COMMAND } from "../components/helpers/constants";
import { IPanier } from "./types/commandTypes";

export const panierDefault: IPanier[] = [];

const initialState = {
  // USERS
  users: {
    currentUser: {
      isLoadingInfo: false,
      error: null,
      user: {}
    },
    currentClient: {
      isLoadingInfo: false,
      error: null,
      client: {}
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

  // COMMANDS
  commands: {
    allCommands: {
      isLoadingInfo: false,
      error: null,
      commands: [...commandModel]
    },
    infoCommand: {
      isLoadingInfo: false,
      error: null,
      command: { ...commandModel[0] }
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
      }
    }
  },
  // PANNIERS
  paniers: {
    allPaniers: {
      isLoadingInfo: false,
      error: null,
      paniers: []
    },
    allPaniersByCommand: {
      isLoadingInfo: false,
      error: null,
      paniers: []
    }
  }
};
export default initialState;
