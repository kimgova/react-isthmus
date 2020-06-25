import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function NewGameFormikYup(props) {
    const formik = useFormik({
        initialValues: {
          name: '',
          genre: ''
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .required('Required'),
          genre: Yup.string()
            .required('Required')
        }),
        onSubmit: values => {
            props.save(values);
            formik.resetForm();
        },  
      });
      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}
          <label htmlFor="genre">Genre</label>
          <input
            name="genre"
            {...formik.getFieldProps('genre')}
          />
          {formik.touched.genre && formik.errors.genre ? (
                <div>{formik.errors.genre}</div>
            ) : null}
          <button type="submit">Guardar</button>
        </form>
      );
}
export default NewGameFormikYup;