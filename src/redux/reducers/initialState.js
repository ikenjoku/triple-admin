export default {
  authReducer: {
    isLoading: false,
    user: null,
    error: null,
  },
  mealReducer: {
    isLoading: false,
    menu: [],
    error: null,
  },
  orderReducer: {
    isLoading: false,
    pendingOrders: [],
    error: null,
  },
  highlightReducer: {
    isLoading: false,
    highlights: [],
    error: null,
  },
  adminReducer: {
    isLoading: false,
    staff: [],
    error: null,
  },
};
