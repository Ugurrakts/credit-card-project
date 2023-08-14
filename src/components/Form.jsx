import "./Form.scss";
import "./CardInputs.scss";
import "./Card.scss";
import React, { useState } from 'react';
import Card from './Card';
import CardInputs from './CardInputs';

import { Formik } from "formik";
import * as Yup from 'yup';


const validationSchema = Yup.object({
    cardHolder: Yup.string().required('Zorunlu alan').matches(/^[A-Za-z\s]+$/, "Sadece harf girebilirsiniz"),
    cardNumber: Yup.string()
        .required('Zorunlu alan')
        .matches(/^\d+$/, 'Sadece rakam giriniz').length(16, 'en az 16 haneli kart numarası girmelisiniz'),
    expireMonth: Yup.number().required('Zorunlu alan'),
    expireYear: Yup.number().required('Zorunlu alan'),
    cvv: Yup.string().required('Zorunlu alan').max(3, 'En az 3 karakter girmelisiniz').matches(/^\d+$/, 'Sadece rakam giriniz'),
});

function Form() {
    const [active, setActive] = useState(false);
    const [focusedInput, setFocusedInput] = useState("");

    const handleClick = (event) => {
        setFocusedInput(event.target.name);
        setActive(event.target.name === "cvv");
    }

    return (
        <div className='form-area'>
            <Formik
                initialValues={{ cardHolder: "", cardNumber: "", expireMonth: null, expireYear: null, cvv: "" }}
                validationSchema={validationSchema}
            >
                {({ handleSubmit, handleChange, values, errors }) => (<form className="inside-form" onSubmit={handleSubmit}>
                    <Card active={active} values={values} focusedInput={focusedInput} />
                    <CardInputs errors={errors} values={values} handleChange={handleChange} handleClick={handleClick} />
                    <button type="submit">Submit</button>
                </form>)}
            </Formik>
        </div>
    );
};

export default Form;

