import React, { useState } from 'react';

export default function Text(props) {

    let [inputs, setInputs] = useState({});
    const handleChange = (event => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        props.done(inputs)
        setInputs({})
    }

    return (
        <>
            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-5'>
                    <h1>Text Box</h1>
                    <form onSubmit={handleSubmit}>

                        <label>Text-Box Name</label>
                        <input type="text" name="textboxname" value={inputs.textboxname || ''} onChange={handleChange} className="form-control" id="" />

                        <label>Text-Box Type</label>
                        <select name="inputType" value={inputs.inputType || ""} onChange={handleChange} className="form-control">
                            <option type="text" >Text</option>
                            <option type="number"  >Number</option>
                            <option type="email">Email</option>
                        </select>

                        <input type='checkBox' name="isRequired" value={inputs.isRequired || false} onChange={handleChange} /> isRequired
                        <br />
                        <input type="submit" className='btn btn-success' value="Done" />

                    </form>
                </div>
            </div>

        </>
    );
}
