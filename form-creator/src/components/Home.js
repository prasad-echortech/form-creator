
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [data, setData] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/main`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  // form elements render
  const renderFormElement = (item) => {
    if (item) {
      return (
        <>
          <h1>{item.formName}</h1>
          <p>{item.fromDesc}</p>
          <hr />

          {item.forms.map((ele) => {

            if (ele.textboxname) {
              return (
                <div key={ele.id}>

                  <label className="form-label" ><h3>{ele.textboxname}</h3></label>
                  {ele.isRequired === true ? <span className='text-danger fs-1 fw-bold'>*</span> : ""}
                  <input type={ele.inputType} className="form-control" />
                </div>
              );
            }

            if (ele.checkboxname) {
              return (
                <div key={ele.id}>
                  <label><h3>{ele.checkboxname}</h3></label>
                  <input type="checkbox" value={ele.isRequired} checked={ele.isRequired} />
                </div>
              );
            }

            if (ele.radioname) {
              return (
                <div key={ele.id}>
                  <label><h3>{ele.radioname}</h3></label>
                  <input type="radio" checked={ele.isRequired} />
                </div>
              );
            }

            if (ele.textareaname) {
              return (
                <div key={ele.id}>
                  <label className="form-label" ><h3>{ele.textareaname}</h3></label>
                  <textarea name="" id="" rows="3" className="form-control"></textarea>
                </div >
              );
            }

            if (ele.dropdownname && Array.isArray(ele.dropOptions)) {
              let dropOptions = ele.dropOptions
              return (
                <div key={ele.id}>
                  <label><h3>{ele.dropdownname}</h3></label>
                  {ele.isRequired === true ? <span className='text-danger fs-1 fw-bold'>*</span> : ""}
                  <form className="form-control">
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
          })}
        </>
      )
    }
  };

  // generate form name and description
  const renderFormName = (item) => {
    if (item.formName) {
      return (
        <div key={item.id}>
          <button className='btn btn-success m-1 mt-5' onClick={(e) => { e.preventDefault(); setSelectedForm(item) }}>{item.formName}</button>
        </div>
      );
    }
  };

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">

          <div className="col-4  mb-5">
            <h1>Choose Forms</h1>
            <form >{data.map((item) => renderFormName(item))}</form>
          </div>

          <div className="col mt-5 p-2 me-5 mb-5 border border-danger" >
            <form>{renderFormElement(selectedForm)}</form>
            <button className='btn btn-success mt-5'>Submit</button>
          </div>

        </div>
      </div>
    </>
  );
}




