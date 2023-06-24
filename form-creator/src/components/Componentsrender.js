import React, { useState } from 'react';

export default function Componentsrender({ formData }) {

  const [isFormVisible, setisFormVisible] = useState(true);
  const renderFormElement = (item) => {

    if (item.formname) {
      return (
        <div key={item.id}>
          <h1>{item.formname}</h1>
          <p>{item.formdescription}</p>
        </div>

      );
    }
    if (item.textboxname) {
      console.log(item.textboxname);
      return (
        <div key={item.id}>
          <label class="form-label" ><h3>{item.textboxname}</h3></label>
          {item.isRequired === true ? <span className='text-danger fs-1 fw-bold'>*</span> : ""}
          <input type={item.inputType} class="form-control" />
        </div>
      );
    }
    if (item.checkboxname) {
      return (
        <div key={item.id}>
          <label><h3>{item.checkboxname}</h3></label>
          <input type="checkbox" value={item.isRequired} checked={item.isRequired} />
        </div>
      );
    }
    if (item.radioname) {
      return (
        <div key={item.id}>
          <label><h3>{item.radioname}</h3></label>
          <input type="radio" checked={item.isRequired} />
        </div>
      );
    }

    if (item.textareaname) {
      return (
        <div key={item.id}>
          <label className="form-label" ><h3>{item.textareaname}</h3></label>
          <textarea name="" id="" rows="3" class="form-control"></textarea>
        </div >
      );
    }

    if (item.dropdownname && Array.isArray(item.dropOptions)) {
      let dropOptions = item.dropOptions
      return (
        <div key={item.id}>

          <label><h3>{item.dropdownname}</h3></label>
          {item.isRequired === true ? <span className='text-danger fs-1 fw-bold'>*</span> : ""}
          <form class="form-control">
            <select>
              {dropOptions.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </form>
        </div>
      );
    }
    return null;
  };
  const remove = () => {
    alert("Form Was Empty")
    setisFormVisible(false)
  }
  return (
    <>
      {isFormVisible && (
        <div className="row mb-1">
          <div className='col-7 bg-warning  container'>
            <form >{formData.map((item) => renderFormElement(item))}</form>
            <button className='btn bg-success mt-2 mb-2' onClick={remove}>Remove Form</button>
          </div>
        </div>
      )}
    </>
  );
}




