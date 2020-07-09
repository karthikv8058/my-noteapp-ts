import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newitems from './containers/Newitems';
import { useSelector, useDispatch } from 'react-redux';
import {itemStates} from './containers/Newitems/reducer';
import { type } from 'os';
import { addItems } from './containers/Newitems/action';

function App() {

  const items = useSelector<itemStates,itemStates['items']>((state)=>state.items);

  console.log('items:',items.length);
  
  const dispatch = useDispatch();

  const onAddItem = (item:string) => {
    dispatch(addItems(item));
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center w-100">
          <div className="jumbotron w-50 border border-primary rounded-0">
              <Newitems addItem={onAddItem}/>

              <ul>
                  {
                    items.map((item)=>{
                      return <li>{item}</li>
                    })}
              </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
