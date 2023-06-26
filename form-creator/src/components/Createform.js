import React, { useState } from "react";
import Text from "./Text";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Textarea from "./Textarea";
import Componentsrender from "./Componentsrender";

let components = {
    "text": Text,
    "checkbox": Checkbox,
    "radio": Radio,
    "textarea": Textarea,
    "dropdown": Dropdown,
};

export default function Home() {

    const [formData, setFormData] = useState({})

    const [inputs, setInputs] = useState({});

    const [activeComponent, setActiveComponent] = useState(null);

    const handleClick = (component) => {
        setActiveComponent(component)
    }

    const handleChange = ((event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(value);
        setInputs(values => ({ ...values, [name]: value }))
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedFormData = {
            ...formData,
            ...inputs,
        };

        fetch(' http://localhost:3000/main', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedFormData)
        })
        setInputs({})
        setFormData(updatedFormData)
    }
    const done = (data) => {
        setFormData({ ...formData, forms: [...(formData?.forms || []), data] })
    }
    const InputComponent = components[activeComponent]

    return (
        <>
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col mt-5">
                        {Object.keys(components).map((compkey) => (
                            <button key={compkey} className=""
                                onClick={() => handleClick(compkey)} style={{ width: "120px" }}>
                                {compkey.toUpperCase()}
                            </button>
                        ))}
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mt-5">
                                <label>Form Name</label>
                                <input type="text" name="formName" value={inputs.formName || ''} onChange={handleChange} />
                                <br />
                                <label>Form Desc</label>
                                <textarea name="fromDesc" value={inputs.fromDesc || ''} onChange={handleChange} className="mt-2"></textarea>
                                <br />
                                <button className="btn btn-success" type="submit">
                                    save-form</button>
                            </div>
                        </form>
                    </div>

                    <div className="col">
                        {activeComponent && <InputComponent done={done} />}
                    </div>
                    <div className="col">
                        <h1>your Form</h1>
                        {formData?.forms?.length > 0 &&
                            <Componentsrender formData={formData.forms} />}
                    </div>
                </div>
            </div>

        </>
    );
}
