function OutForm(prop) {
  const {form: {date, wayy}, onSelectInput, onSelectSubmit, onDeleteForm, onResetForm, flag} = prop;
  const typeB = flag ? 'popup' : 'entry';
  function deleteForm(evt) { evt.preventDefault(); onDeleteForm(evt); }
  function resetForm(evt) { evt.preventDefault(); onResetForm(evt); }
  function hendlSubmit(evt) { onSelectSubmit(evt, typeB) }
  function hendlInput(evt) { onSelectInput(evt); }

  return(
    <form className={typeB} id='formEnt' onSubmit={hendlSubmit}>
      {flag ? <h4 className="form_head">Внесите изменения</h4> : <null/>}
      <label htmlFor='dat' className='grup_date'>
        <span className='Lebel_text'>Дата(дд.мм.гггг)</span> 
        <input
          type={flag? '': 'date'}
          id='dat'
          name='dat'
          className='input'
          value={date.dat}
          onChange={hendlInput} required disabled={flag? true: false}/>
      </label>
      <label htmlFor='way' className='grup_date'>
        <span className='Lebel_text'>Пройдено км</span>
        <input
          type='number' step='0.1' 
          id='way'
          name='way'
          className='input'
          value={wayy.way}
          onChange={hendlInput} required/>
      </label>
      {flag? (<div className="blok_but">
        <button id='btn_form' className='btn_form' onClick={deleteForm}>отмена</button>
        <button id='btn_form' className='btn_form forPopup' onClick={resetForm}>oчистить</button>
        <button id='btn_form' className='btn_form'>ok</button>
      </div>) : <button id='btn_form' className='btn_form'>ok</button>}
    </form>
  )
}

export default OutForm;
