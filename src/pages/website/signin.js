import React from 'react';
import { useForm } from 'react-hook-form';
import { signin } from '../../api/authAPI';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { authenticate, isAuthenticated } from '../../auth';

const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const onSubmit = async (user) => {
        try {
            const response = await signin(user);
            authenticate(response.data);
            setSuccess(true);
            setError("")
        } catch (error) {
            setError(error.response.data)
        };

    };
    const redirectUser = () => {
        if (success) {
            const id = isAuthenticated().user.id; //lay id trong localStorage
            if (id === 1) {
                // return <Redirect to="/admin" />;
                window.location.href = "/admin"
            } else {
                // return <Redirect to="/" />
                window.location.href = '/'
            }
        }
    }
    return (
        <>
            <div className="container">
                <div className="p-5 mt-5 mb-5 bg-white rounded shadow-lg " style={{ marginLeft: 200, marginRight: 200 }}>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        {redirectUser()}
                        <h2 className="text-center">Đăng nhập</h2>
                        {error && <div className="alert alert-danger">{error}</div>}

                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" {...register('email', { required: true })} />
                            {errors.email && <span className="mt-2 d-block text-danger">Email không để trống</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" {...register('password', { required: true })} />
                            {errors.password && <span className="mt-2 d-block text-danger">Password không để trống</span>}
                        </div>
                        <button className="btn btn-primary">Đăng nhập</button>
                    </form>
                </div>

            </div>


        </>
    )
}

export default Signin
