const defaultState = {
  items: [],
};

const GET_ITEM = 'GET_ITEM';
const CREATE_ITEM = 'CREATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const CHECKED_CHECK = 'CHECKED_CHECK';

export const todoReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ITEM:
      return { ...state, items: payload };
    case CREATE_ITEM:
      return { ...state, items: [...state.items, payload] };
    case DELETE_ITEM:
      return { ...state, items: state.items.filter((item) => item.id !== payload.id) };
    case CHECKED_CHECK:
      return { ...state, items: payload };
    default:
      return state;
  }
};

export const getItemsAction = (payload) => ({
  type: GET_ITEM,
  payload,
});

export const createItemAction = (payload) => ({
  type: CREATE_ITEM,
  payload,
});

export const deleteItemAction = (payload) => ({
  type: DELETE_ITEM,
  payload,
});
export const checkedCheckAction = (payload) => ({
  type: CHECKED_CHECK,
  payload,
});
