import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll } from "../../../api/productAPI";
export default function Product(props) {
    const [products, setPorducts] = useState([]);
    useEffect(() => {
        // Get danh sach
        const getProduct = async () => {
            try {
                const { data } = await getAll();
                setPorducts(data);
            } catch (error) {
                console.log(error);
            }
        };

        getProduct();
    }, [props]);
    return (
        <>
            <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
                <h1 className="h2">Quản lý sản phẩm</h1>
                <div className="mb-2 btn-toolbar mb-md-0">
                    <Link to="/admin/product/add" type="button" className="btn btn-sm btn-outline-primary">
                        Thêm sản phẩm
                    </Link>

                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Danh mục</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><img src={item.image} width={150}></img></td>
                                <td>{item.category.name}</td>
                                <td width="150">
                                    <Link to={`/admin/products/${item.id}/edit`} className="mx-1 btn btn-warning btn-sm">
                                        Sửa
                                    </Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => props.onRemove(item.id)}>
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
