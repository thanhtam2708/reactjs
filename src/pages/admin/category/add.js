import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useState } from "react";
import { add } from "../../../api/categoryAPI";
const AddCateForm = (props) => {
    const [categories, setCategories] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const history = useHistory();
    const onSubmit = async (data) => {
        try {
            const { data1 } = await add(data);
            console.log(data);
            setCategories([...categories, data1]);
        } catch (error) {
            console.log(error);
        }
        // props.onAdd(category);
        history.push("/admin/cate");
    };
    //add
    // const onHandleAdd = async (item) => {
    //     try {
    //         const { data } = await add(item);
    //         setCategories([...categories, data]);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Tên danh mục</label>
                <input
                    type="text"
                    className="form-control"
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className="mt-2 d-block text-danger">Bắt buộc phải nhập trường này</span>
                )}
            </div>
            <div className="mb-3">
                <label className="form-label">Chi tiết</label>
                <textarea className="form-control" {...register("desc")} />
            </div>
            <button className="btn btn-primary" type="submit">
                Thêm danh mục
            </button>
        </form>
    );
};

export default AddCateForm;
