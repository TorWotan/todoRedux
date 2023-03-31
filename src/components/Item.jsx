import { ListItemIcon, Checkbox, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useDispatch } from 'react-redux';
import { checkedCheck, deleteItem, fetchItems } from '../asyncActions/itemsActions';

export const Item = ({ item } ) => {
  const dispatch = useDispatch();

  const handleChange = async () => {
    await dispatch(checkedCheck(item));
    dispatch(fetchItems());
  };

  return (
    <div className="list">
      <div className="list-text">
        <ListItemIcon>
          <Checkbox checked={item.checked} onClick={handleChange} size="small" />
        </ListItemIcon>

        <Typography variant="body1" color="green" align="bottom" sx={{}}>
          {item.checked ? <s> {item.name} </s> : item.name}
        </Typography>
      </div>
      <Button variant="outlined" onClick={() => dispatch(deleteItem(item.id))} color="error">
        Удалить
        <DeleteIcon fontSize="small" color="error" sx={{ pl: 1 }} />
      </Button>
    </div>
  );
};
