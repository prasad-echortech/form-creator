import React, { useState } from 'react';

export default function Textarea(props) {

    const [inputs, setInputs] = useState({});
    const handleChange = (event => {
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
        <div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-5 ">
                    <h1>Text Area</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Enter Text-Area Name</label>
                            <input type="text" className="form-control" name="textareaname" value={inputs.textareaname || ""} onChange={handleChange} />
                        </div>
                        <div><input type='checkBox' name="isRequired" value={inputs.isRequired || false} onChange={handleChange} />Default Checked</div>
                        <button type="submit" className="btn btn-success">Done</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
