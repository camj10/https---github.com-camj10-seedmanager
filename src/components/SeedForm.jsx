import React from 'react'
import { Formik, Form, Field, useField } from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';

const TextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <textarea {...field} {...props} />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </>
    );
};

const SeedForm = ({ initialValues, btnTxt, onSubmit,options }) => {
    const SeedErrors = Yup.object().shape({
        fecha: Yup.date()
            .required('Requerido'),
        variedad: Yup.string()
            .required("This is required")
            .min(2, 'The option must have at least 2 characters.'),
        semilla: Yup.string()
            .required("This is required")
            .min(2, 'The option must have at least 2 characters.'),
        cantidad: Yup.number()
            .required("This is required"),
        stockcritico: Yup.number()
            .required("This is required"),
        descripcion: Yup.string()
            .required("This is required")
            .min(2, 'The option must have at least 2 characters.'),
    });

    return (
        <Formik 
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SeedErrors}
        options={options}
    >
        {({ errors, touched }) => (
            <Form>
                <label htmlFor="fecha" className='form-label'>Fecha</label>
                <Field name="fecha" type="date" className="form-control" />
                <label htmlFor="variedad" className='form-label'>Variedad de la semilla</label>
                <Field name="variedad" as="select" className="form-control">
                    <option value=" ">Selecciona una varidad</option>
                    {
                        options.map(( option, index ) =>
                        <option key={index} value={option.value}>{option}</option>)
                    }
                </Field >
                {touched.variedad && errors.variedad && <div className="form-text text-danger">{errors.categoria}</div>}
                <label htmlFor="semilla" className='form-label'>Tipo de semilla:</label>
                <Field name="semilla" as="select" className="form-control" >
                    <option value=" ">Selecciona un tipo</option>
                    <option value="MAIZ">Maiz</option>
                    <option value="TRIGO">Trigo</option>  
                    <option value="SOJA">Soja</option>                            
                </Field>
                {touched.semilla && errors.semilla && <div className="form-text text-danger">{errors.semilla}</div>}
                <label htmlFor="cantidad" className='form-label'>Cantidad</label>
                <Field name="cantidad" type="number" className="form-control" />
                {touched.cantidad && errors.cantidad && <div className="form-text text-danger">{errors.cantidad}</div>}
                <label htmlFor="descripcion" className='form-label' placeholder='Ingrese un stock critico'>Stock critico</label>
                <Field name="stockcritico" type="number" className="form-control" />
                {touched.stockcritico && errors.stockcritico && <div className="form-text text-danger">{errors.stockcritico}</div>}
                <label htmlFor="descripcion" className='form-label' placeholder='Ingrese una breve descripción'>Descripcion</label>
                <Field name="descripcion" as="textarea" className="form-control" />
                <button className="btn btn-primary mt-2" type="submit">{btnTxt}</button>
                <Link to='/seed' className='btn btn-dark mt-2 ms-2'>Volver</Link>
            </Form>
        )}
    </Formik>
    )
}

export default SeedForm