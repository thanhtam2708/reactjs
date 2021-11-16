import { useEffect, useState } from "react";
import { getAll } from "../../api/productAPI";
import { getAllCate } from "../../api/categoryAPI";
import banner from '../../img/banner/banner.png'
import productSale from '../../img/product-sale.png'
import calendar from '../../img/icon/calendar.png'
import blog1 from '../../img/blog/blog-1.jpg'
import blog2 from '../../img/blog/blog-2.jpg'
import blog3 from '../../img/blog/blog-3.jpg'
import { Link } from "react-router-dom";
export default function IndexWebsite(props) {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getAll();
            setProduct(data);
            console.log("product", products);
        };
        getProduct();
    }, [])
    //console.log("aaa", props);


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
    //console.log("aaa", props);
    return (
        <>
            <div>
                <img src={banner} style={{ width: '100%' }} />
            </div>

            <section className="product spad">
                <div className="container py-5">
                    <h4 className="text-center fw-bold">Bộ sưu tập nổi bật</h4>
                    <div className="py-2 row">
                        <div className="col-lg-12">
                            <ul className="filter__controls">
                                {categories.map((item, index) => (
                                    <li className="active" data-filter="*">{item.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row product__filter">
                        {products.map((item, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 mix new-arrivals">
                                <div className="product__item">
                                    <div className="">
                                        <img src={item.image} width={300} height={400} />
                                    </div>
                                    <div className="">
                                        <Link to={`/products/${item.id}`} >
                                            <h5>{item.name}</h5>
                                        </Link>

                                        <h5>${item.price}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>

            <section className="categories spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="categories__text">
                                <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="categories__hot__deal">
                                <img src={productSale} alt="" />
                                <div className="hot__deal__sticker">
                                    <span>Sale Of</span>
                                    <h5>$29.99</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <div className="categories__deal__countdown">
                                <span>Deal Of The Week</span>
                                <h2>Multi-pocket Chest Bag Black</h2>
                                <div className="categories__deal__countdown__timer" id="countdown">
                                    <div className="cd-item">
                                        <span>3</span>
                                        <p>Days</p>
                                    </div>
                                    <div className="cd-item">
                                        <span>1</span>
                                        <p>Hours</p>
                                    </div>
                                    <div className="cd-item">
                                        <span>50</span>
                                        <p>Minutes</p>
                                    </div>
                                    <div className="cd-item">
                                        <span>18</span>
                                        <p>Seconds</p>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="latest spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Latest News</span>
                                <h2>Fashion New Trends</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src={blog1} />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src={calendar} alt="" /> 16 February 2020</span>
                                    <h5>What Curling Irons Are The Best Ones</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic " >
                                    <img src={blog2} />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src={calendar} alt="" /> 21 February 2020</span>
                                    <h5>Eternity Bands Do Last Forever</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic " >
                                    <img src={blog3} />
                                </div>
                                <div className="blog__item__text">
                                    <span><img src={calendar} alt="" /> 28 February 2020</span>
                                    <h5>The Health Benefits Of Sunglasses</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>



    )
}

