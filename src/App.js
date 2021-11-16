import { useState, useEffect } from "react";
import { add, getAll, remove, update, get2 } from "./api/productAPI";

import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";


export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Get danh sach
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  //lấy chi tiết sp
  const [prdDetail, setprdDetail] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { prdDetail } = await get2();
        setprdDetail(prdDetail);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  const onHandleRemove = (id) => {
    try {
      remove(id); // Xóa data trên API
      const newProduct = products.filter((item) => item.id !== id); // rerender
      setProducts(newProduct);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleEdit = async (item) => {
    try {
      const { data } = await update(item);
      console.log("app.js", data);
      const newProduct = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Routes products={products}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onEdit={onHandleEdit}
        detail={prdDetail}
      />



    </>

  );
}
