import React from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, register, errors } = useForm();
  const formSubmit = (values) => {
    console.log("FORM VALUES: ", values);
  };

  console.log("Form -> errors", errors)
  return (
    <div className="form" style={{margin: '10%'}}>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" ref={register({ required: 'This field is required' })} />
          <div style={{color: 'red'}}>{errors.name && errors.name.message}</div>
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input name="email" type="text" ref={register} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
