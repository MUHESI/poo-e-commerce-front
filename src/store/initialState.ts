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
      isLoadingInfo: false,
      error: null,
      categories: []
    }
  }
};
export default initialState;
