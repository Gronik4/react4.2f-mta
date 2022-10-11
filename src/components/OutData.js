import React from 'react';
import cros from './../img/cros.png';
import pen from './../img/p.png';

function OutData(prop) {
  const {primDat, outputPopup, deleteItem} = prop;
  function removing(evt) {
    const tagets = evt.target.closest('.content_item');
    const delItem = tagets.querySelector('.item_date').textContent;
    deleteItem(delItem);
  }
  function correction(evt) {
    const item = evt.target.closest('.content_item');
    const date = item.querySelector('.item_date').textContent;
    const way = item.querySelector('.item_way').textContent;
    outputPopup(date, way, 'popup');
  }
  return (
    <div className='content'>
      {primDat.map((item, index) => {
        return(
          <div className='content_item' key={index}>
            <p className='item_date'>{item.date}</p>
            <p className='item_way'>{item.way}</p>
            <div className='pics'>
              <img className='pic' src={pen} alt="pencil" onClick={correction}/>
              <img className='pic' src={cros} alt = "cross" onClick={removing}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default OutData;
