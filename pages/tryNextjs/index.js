import {useState} from 'react';
import Link from 'next/link'

const index = () => {
    const [inputFields, setInputFields] = useState([
        {name: '', age: ''}
    ]);

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    };

    const addFields = () => {
        let newField = {name: '', age: ''};

        setInputFields([...inputFields, newField])
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(inputFields)
    };

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data)
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h3>How to Build Dynamic Forms in React</h3>
                        <h5>
                            <Link href="https://www.freecodecamp.org/news/build-dynamic-forms-in-react/">
                                <a>Click Here</a>
                            </Link>
                        </h5>
                        <hr/>
                    </div>
                </div>
                <div className="row justify-center">
                    <div className="col">
                        <form onSubmit={submit}>
                            {inputFields.map((input, index) => {
                                return (
                                    <div key={index}>
                                        <input
                                            name='name'
                                            placeholder='Name'
                                            value={input.name}
                                            onChange={event => handleFormChange(index, event)}
                                            className="form-control mb-2"
                                        />
                                        <input
                                            name='age'
                                            placeholder='Age'
                                            value={input.age}
                                            onChange={event => handleFormChange(index, event)}
                                            className="form-control mb-2"
                                        />
                                        <button className="btn btn-primary mb-3" onClick={addFields}>Add More..</button>
                                        <button className="btn btn-danger mx-2 mb-3" onClick={() => removeFields(index)}>Remove</button>
                                    </div>
                                )
                            })}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default index;