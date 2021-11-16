import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { getAllCate } from "../../../api/categoryAPI";
const AddProductForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        const product = {
            id: Math.random().toString(5).substring(2),
            ...data
        };
        props.onAdd(product);
        history.push("/admin/product");
    };


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            const { data } = await getAllCate();
            setCategories(data);
            console.log("cate", categories);
        };
        getCategories();
    }, [])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Tên sản phẩm</label>
                <input
                    type="text"
                    className="form-control"
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className="mt-2 d-block text-danger">Field is required</span>
                )}
            </div>
            <div className="mb-3">
                <label className="form-label">Giá sản phẩm</label>
                <input type="number" className="form-control" {...register("price")} />
            </div>
            <div className="mb-3">
                <label className="form-label">Ảnh</label>
                <input
                    type="text"
                    className="form-control"
                    {...register("image", { required: true })}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Danh mục</label>
                <select name="cate_id" id="categoryId" class="form-control"
                    {...register("categoryId", { required: true })}>
                    {categories.map((item, index) => (
                        <option value={item.id}>{item.name}</option>
                    ))}

                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Chi tiết</label>
                <textarea className="form-control" {...register("desc")} />
            </div>
            <button className="btn btn-primary" type="submit">
                Thêm sản phẩm
            </button>
        </form>
    );
};
// AddProductForm2.PropTypes = {
//   onAdd: PropTypes.func()
// };
export default AddProductForm;
