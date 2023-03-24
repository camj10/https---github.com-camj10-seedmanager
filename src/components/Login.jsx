import React from 'react'
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials=true;
const Login = ({ onSubmit }) => {
    const navigate = useNavigate();
   
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const login = async(values, actions) => {
        try {
            const respuesta = await axios.post(`http://localhost:8000/api/usuario/login`, values);
            // const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/usuario/login`, values);
            console.log(respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "Ingreso correcto",
                    showConfirmButton: false,
                    timer: 1500
                })
    
                actions.resetForm(initialValues);
                navigate('/seed')
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }
    return (

        <div className="login">
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                onSubmit={login}
            >
                {({ errors, touched }) => (
                    <Form className='form'>
                        <span className="tituloLogin">Seed manager</span>
                        <Field name="name" className="form-control" placeholder="Ingrese su nombre de usuario" />
                        <Field name="email" className="form-control" placeholder="Ingrese email" />
                        <Field name="password" type="password" className="form-control mt-2" placeholder="Ingrese contraseña" />
                        <p><button className="btn btn-primary mt-5" onClick={onSubmit} >Ingresar</button></p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login