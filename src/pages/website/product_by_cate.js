import pro2 from '../../img/product/product-2.jpg'
import { useEffect, useState } from 'react';
import { getAll, getByCate } from '../../api/productAPI';
import { getAllCate } from '../../api/categoryAPI';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
export default function Product_By_Cate() {
    const [products, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getByCate(id);
            setProduct(data);
            console.log("product", products);
        };
        getProduct();
    }, [id])
    //cate
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
        <>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Sản phẩm</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Trang chủ</a>
                                    <span>Sản phẩm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shop__sidebar">
                                <div className="shop__sidebar__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search..." />
                                        <button type="submit"><span className="icon_search" /></button>
                                    </form>
                                </div>
                                <div className="shop__sidebar__accordion">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-heading">
                                                <a data-toggle="collapse" data-target="#collapseOne">Danh mục</a>
                                            </div>
                                            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop__sidebar__categories">
                                                        <ul className="nice-scroll">
                                                            {categories.map((item, index) => (
                                                                <li><Link to={`/shop/${item.id}`} className="text-decoration-none">{item.name}</Link></li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-heading">
                                                <a data-toggle="collapse" data-target="#collapseFive">Colors</a>
                                            </div>
                                            <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop__sidebar__color">
                                                        <label className="c-1" htmlFor="sp-1">
                                                            <input type="radio" id="sp-1" />
                                                        </label>
                                                        <label className="c-2" htmlFor="sp-2">
                                                            <input type="radio" id="sp-2" />
                                                        </label>
                                                        <label className="c-3" htmlFor="sp-3">
                                                            <input type="radio" id="sp-3" />
                                                        </label>
                                                        <label className="c-4" htmlFor="sp-4">
                                                            <input type="radio" id="sp-4" />
                                                        </label>
                                                        <label className="c-5" htmlFor="sp-5">
                                                            <input type="radio" id="sp-5" />
                                                        </label>
                                                        <label className="c-6" htmlFor="sp-6">
                                                            <input type="radio" id="sp-6" />
                                                        </label>
                                                        <label className="c-7" htmlFor="sp-7">
                                                            <input type="radio" id="sp-7" />
                                                        </label>
                                                        <label className="c-8" htmlFor="sp-8">
                                                            <input type="radio" id="sp-8" />
                                                        </label>
                                                        <label className="c-9" htmlFor="sp-9">
                                                            <input type="radio" id="sp-9" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-heading">
                                                <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                                            </div>
                                            <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop__sidebar__tags">
                                                        <a href="#">Product</a>
                                                        <a href="#">Bags</a>
                                                        <a href="#">Shoes</a>
                                                        <a href="#">Fashio</a>
                                                        <a href="#">Clothing</a>
                                                        <a href="#">Hats</a>
                                                        <a href="#">Accessories</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="shop__product__option">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__left">
                                            <p>Showing 1–12 of 126 results</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__right">
                                            <p>Sort by Price:</p>
                                            <select>
                                                <option value>Low To High</option>
                                                <option value>$0 - $55</option>
                                                <option value>$55 - $100</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {products.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item">
                                            <div className="">
                                                <img src={item.image} width={300} height={400} />
                                            </div>
                                            <div className="product__item__text">
                                                <h5>{item.name}</h5>
                                                <h5>${item.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="product__pagination">
                                        <a className="active" href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <span>...</span>
                                        <a href="#">21</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}