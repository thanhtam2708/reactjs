import React from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../../api/authAPI';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { authenticate } from '../../auth';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const onSubmit = async (user) => {
        try {
            const response = await signup(user);
            authenticate(response.data);
            setSuccess(true);
            setError("")
        } catch (error) {
            setError(error.response.data)
        }
    }
    return (
        <>

            <div className="container ">
                <div className=" shadow-lg p-5 mb-5 mt-5 bg-white rounded" style={{ marginLeft: 200, marginRight: 200 }}>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ paddingLeft: 100, paddingRight: 100 }}>
                        <h2 className="text-center">Đăng ký</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">Bạn đã đăng ký thành công. Click <Link to="/signin">vào đây </Link>để đăng nhập</div>}
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Tên</label>
                            <input type="text" className="form-control" {...register('name')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" {...register('email', { required: true })} />
                            {errors.email && <span className="d-block mt-2 text-danger">Email không để trống</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" {...register('password', { required: true })} />
                            {errors.password && <span className="d-block mt-2 text-danger">Password không để trống</span>}
                        </div>
                        <button className="btn btn-primary">Đăng ký</button>
                        <p>Bạn đã có tài khoản <a href="">Đăng nhập</a></p>
                    </form>
                </div>

            </div>


        </>
    )
}

export default Signup
