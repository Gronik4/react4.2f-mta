import { useState } from 'react';
import './css/App.css';
import './css/stamp.css';
import primary from './components/primary.json';
import OutData from './components/OutData';
import Service from './components/Service';
import OutForm from './components/OutForm';

function App() {
  const form = {date: '', wayy: ''};
  const [date, setDate] = useState({dat: ''});
  const [wayy, setWayy] = useState({way: ''});
  const [workList, setWorkList] = useState({res: primary});
  const [flags, setFlags] = useState({flag: ''})
  form.date = date;
  form.wayy = wayy;

  function HendlEntry(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    if(name === 'dat') { setDate({dat: value}); } else { setWayy({way: value}); }
  };

  function stateFormEmpty() {setDate({dat: ''}); setWayy({way: ''});} // Очистить поля ввода

  function itemDelete(item) {
    const typeB = '';
    const arreyData = Service(workList, form, typeB, item);
    setWorkList({res: arreyData});
  }

  function HendlerSubmit(evt, typeB) {
    evt.preventDefault();
    const arreyData = Service(workList, form, typeB);
    setWorkList({res: arreyData});
    stateFormEmpty();
    setFlags({flag: ''})
  }
  
  function setingFlag(date, way, flag) {
    setFlags({flag: flag});
    setDate({dat: date});
    setWayy({way: way});
  }
  return (
    <div className="App">
      <OutForm
        form={form} 
        onSelectInput={(evt) => {HendlEntry(evt);}}
        onSelectSubmit={(evt) => {HendlerSubmit(evt);}}
        flag=''
      />
      {flags.flag ?
        <OutForm
        form={form} 
        onSelectInput={(evt) => {HendlEntry(evt);}}
        onSelectSubmit={(evt, typeB) => {HendlerSubmit(evt, typeB);}}
        onResetForm={(evt) => {evt.preventDefault(); stateFormEmpty();}}
        onDeleteForm={(evt) => {evt.preventDefault(); setFlags({flag: ''})}}
        flag={flags.flag}/>: <p></p>}
      <div className='content_header'>
        <p className='header_item'>Дата(дд.мм.гггг)</p>
        <p className='header_item'>Пройдено км</p>
        <p className='header_item'>Действия</p>
      </div>
      <OutData
        primDat = {workList.res}
        outputPopup={(date, way, flag) =>{setingFlag(date, way, flag)}}
        deleteItem={(item) => {itemDelete(item)}}
      />
    </div>
  );
}

export default App;
