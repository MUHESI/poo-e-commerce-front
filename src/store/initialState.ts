const initialState = {
  // USERS
  users: {
    currentUser: {
      isLoadingInfo: false,
      error: null,
      user: {}
    },
    allUsers: {
      isLoadingInfo: false,
      error: null,
      users: []
    }
  },
  // CATEGORIES
  categories: {
    allCategories: {
      isLoadingInfo: false,
      error: null,
      categories: []
    }
  }
};
export default initialState;
