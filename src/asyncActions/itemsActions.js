import {
  checkedCheckAction,
  createItemAction,
  deleteItemAction,
  getItemsAction,
} from '../store/todoReducer';
import axios from 'axios';

export const fetchItems = () => {
  return async function (dispatch) {
    const items = await axios.get('https://63ad80c73e465169165c1b87.mockapi.io/todos');

    dispatch(getItemsAction(items.data));
  };
};

export const addItems = (name) => {
  return async function (dispatch) {
    const { data } = await axios.post('https://63ad80c73e465169165c1b87.mockapi.io/todos', {
      name,
      checked: false,
    });
    dispatch(createItemAction(data));
    // console.log(data);
  };
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`https://63ad80c73e465169165c1b87.mockapi.io/todos/${id} `);
    dispatch(deleteItemAction({ id }));
    // console.log(data);
  } catch (error) {
    console.error(error);
  } 
};

export const checkedCheck = (item) => async (dispatch) => {
  try {
    // console.log(item, 'item');
    const { data } = await axios.put(
      `https://63ad80c73e465169165c1b87.mockapi.io/todos/${item.id}`,
      {
        checked: !item.checked,
      },
    );
    // console.log(data);
    dispatch(checkedCheckAction(data));
  } catch (error) {
    console.error(error);
  }
};
