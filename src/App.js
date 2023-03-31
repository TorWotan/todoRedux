import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, addItems, checkedCheck } from './asyncActions/itemsActions';

import { Button, TextField } from '@mui/material';

import { Container } from '@mui/system';
import { Item } from './components/Item';

function App() {
  const [text, setText] = React.useState('');

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    try {
      dispatch(fetchItems());
    } catch (error) {
      console.log(error, 'Ошибка при запросе данных');
    }
  }, []);

  const inputRef = React.useRef();

  const clickOnAdd = () => {
    dispatch(addItems(text));
    setText('');
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <Container sx={{ p: 4 }}>
        <div className="header">
          <TextField
            className="header_input"
            ref={inputRef}
            value={text}
            variant="outlined"
            id="outlined-basic"
            label="Какой план?"
            onChange={handleChange}
            sx={{ minWidth: '250px', height: '40px', pr: 1 }}
            onKeyPress={(e) => e.key === 'Enter' && clickOnAdd()}
          />
          {text && (
            <svg
              className="header_clear"
              onClick={() => setText('')}
              height="20"
              viewBox="0 0 48 48"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
              <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
          )}
          <Button
            onClick={clickOnAdd}
            size="medium"
            variant="contained"
            color="success"
            sx={{ height: '55px' }}>
            Добавить
          </Button>
        </div>
        <div>
          {items.length > 0 ? (
            <div>
              {items.map((item) => (
                <Item item={item} />
              ))}
            </div>
          ) : (
            <h1>Пусто</h1>
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
