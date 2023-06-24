import React, { useState} from 'react';

export default function Dropdown(props) {

    const [inputs, setInputs] = useState({});

    let handleChange = (event => {
        console.log(event);
        let name = event.target.name;
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("data  2", inputs.dropOptions);
        inputs.dropOptions = inputs.dropOptions.split("\n");

        props.done(inputs)
        setInputs({})
    }

    return (
        <>
            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-5'>
                    <h1>Drop Down</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Label Name</label>
                            <input type="text" className="form-control" name="dropdownname" value={inputs.dropdownname || ""} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter The Options</label>
                            <p>(each option in a new line)</p>
                            <textarea name="dropOptions"
                                value={inputs.dropOptions} onChange={handleChange} />

                        </div>
                        <div><input type='checkBox' className='mb-3' name="isRequired" value={inputs.isRequired || false} onChange={handleChange} /> isRequired</div>
                        <button type="submit" className="btn btn-success">Done</button>

                    </form>
                </div>
            </div>
        </>
    );
}
