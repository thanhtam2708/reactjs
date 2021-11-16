import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import { get } from "../../../api/productAPI";
const EditProductForm = (props) => {
    const [product, setProduct] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { id } = useParams();
    const history = useHistory();
    //call API de lay obj dua vao tu id tren url
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await get(id);
            setProduct(data);
        };
        getProduct();
    }, [])
    const onSubmit = (data) => {
        console.log(data);
        const product = {
            id: id,
            ...data
        };
        props.onEdit(product);
        history.push("/admin/product");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sửa sản phẩm</h1>
            <div className="mb-3">
                <label className="form-label">Tên sản phẩm</label>
                <input
                    type="text"
                    className="form-control"
                    defaultValue={product.name}
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className="mt-2 d-block text-danger">Field is required</span>
                )}
            </div>
            <div className="mb-3">
                <label className="form-label">Giá sản phẩm</label>
                <input type="number"
                    className="form-control"
                    defaultValue={product.price}
                    {...register("price")} />
            </div>
            <div className="mb-3">
                <label className="form-label">Danh mục</label>
                <select className="form-control"
                    defaultValue={product.category}
                    {...register("category")}>
                    <option value="Danh mục A">Danh mục A</option>
                    <option value="Danh mục B">Danh mục B</option>
                </select>
            </div>
            <button className="btn btn-primary" type="submit">
                Sửa sản phẩm
            </button>
        </form>
    );
};
// AddProductForm2.PropTypes = {
//   onAdd: PropTypes.func()
// };
export default EditProductForm;
