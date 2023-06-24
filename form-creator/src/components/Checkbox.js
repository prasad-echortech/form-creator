import React, { useState } from 'react';

export default function Checkbox(props) {

    const [inputs, setInputs] = useState({});

    const handleChange = (event => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
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
                    <h1>Check Box</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Check-Box Name</label>
                            <input type="text" className="form-control" id="" name="checkboxname" value={inputs.checkboxname || ""} onChange={handleChange} />
                        </div>

                        <div><input type='checkBox' name="isRequired" value={inputs.isRequired || false} onChange={handleChange} />Default Checked</div>
                        <button type="submit" className="btn btn-success">Done</button>
                    </form>
                </div>
            </div>

        </>
    );
}
