import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCate, remove } from "../../../api/categoryAPI";

export default function Category(props) {
    //category
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Get danh sach
        const getCategories = async () => {
            try {
                const { data } = await getAllCate();
                setCategories(data);
            } catch (error) {
                console.log(error);
            }
        };

        getCategories();
    }, []);
    // Xóa
    // const onHandleRemove = (id) => {
    //     try {
    //         remove(id); // Xóa data trên API
    //         const newProduct = categories.filter((item) => item.id !== id); // rerender
    //         setCategories(newProduct);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const onRemove = async (id) => {
        try {
            const { data } = await remove(id);
            const newCates = categories.filter((item) => item.id !== id);
            setCategories(newCates);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
                <h1 className="h2">Quản lý danh mục</h1>
                <div className="mb-2 btn-toolbar mb-md-0">
                    <Link to="/admin/cate/add" type="button" className="btn btn-sm btn-outline-primary">
                        Thêm danh mục
                    </Link>

                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên danh mục</th>
                            <th scope="col">Chi tiết</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.desc}</td>

                                <td width="150">
                                    <Link to={`/admin/cate/${item.id}/edit`} className="mx-1 btn btn-warning btn-sm">
                                        Sửa
                                    </Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => onRemove(item.id)} >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
