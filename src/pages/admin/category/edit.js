import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get, update } from "../../../api/categoryAPI"
const EditCateForm = (props) => {
    const { id } = useParams('id');
    const [categories, setCategories] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    console.log(id);
    const history = useHistory();
    //call API de lay obj dua vao tu id tren url
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await get(id);
            setCategories(data);
            console.log(data);
        };
        getCategory();
    }, [])
    const onSubmit = async (item) => {
        console.log(item);
        const category = {
            id: id,
            ...item
        };
        //props.onEdit(category);
        try {
            const { data } = await update(category);
            console.log("app.js", data);

            setCategories(...category, data);
        } catch (error) {
            console.log(error);
        }
        history.push("/admin/cate");
    };
    //edit
    // const onHandleEdit = async (item) => {
    //     try {
    //       const { data } = await update(item);
    //       console.log("app.js", data);
    //       const newCate = category.map((category) =>
    //         category.id == data.id ? data : category
    //       );
    //       setCategories(newCate);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sửa sản phẩm</h1>
            <div className="mb-3">
                <label className="form-label">Tên sản phẩm</label>
                <input
                    type="text"
                    className="form-control"
                    defaultValue={categories.name}
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className="mt-2 d-block text-danger">Field is required</span>
                )}
            </div>
            <div className="mb-3">
                <label className="form-label">Chi tiết</label>
                <textarea
                    className="form-control"
                    defaultValue={categories.desc}
                    {...register("desc")} />
            </div>

            <button className="btn btn-primary" type="submit">
                Sửa danh mục
            </button>
        </form>
    );
};

export default EditCateForm;
