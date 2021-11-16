import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProductForm from "./pages/admin/product/add";
import EditProductForm from "./pages/admin/product/edit";
import Product from "./pages/admin/product";

import DashBoard from "./pages/admin/dashboard";
import NotFound from "./pages/404";
import Signup from "./pages/website/signup";
import Signin from "./pages/website/signin";
import AdminLayout from "./layouts/adminLayout";
import WebsiteLayout from "./layouts/websiteLayout";
import IndexWebsite from "./pages/website";
import Category from "./pages/admin/category";
import AddCateForm from "./pages/admin/category/add";
import EditCateForm from "./pages/admin/category/edit";
import Shop from "./pages/website/shop";
import ShopDetail from "./pages/website/shop_detail";
import ContactUs from "./pages/website/contact";
import PrivateAdmin from "./auth/privateAdmin";
import Product_By_Cate from "./pages/website/product_by_cate";
const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                {/* admin */}
                <PrivateAdmin exact path="/admin/:path?/:path?/:path?">
                    <AdminLayout>
                        <Switch>
                            <PrivateAdmin exact path="/admin">
                                <DashBoard />
                            </PrivateAdmin>
                            <PrivateAdmin exact path="/admin/product">
                                <Product {...props} />
                            </PrivateAdmin>
                            <PrivateAdmin exact path="/admin/product/add">
                                <AddProductForm {...props} />
                            </PrivateAdmin>
                            <PrivateAdmin exact path="/admin/products/:id/edit">
                                <EditProductForm {...props} />
                            </PrivateAdmin>
                            <PrivateAdmin exact path="/admin/cate">
                                <Category {...props} />
                            </PrivateAdmin>
                            <PrivateAdmin exact path="/admin/cate/add">
                                <AddCateForm {...props} />
                            </PrivateAdmin>
                            <PrivateAdmin exact path="/admin/cate/:id/edit">
                                <EditCateForm {...props} />
                            </PrivateAdmin>
                        </Switch>
                    </AdminLayout>
                </PrivateAdmin>

                {/* website */}
                <Route exact path="">
                    <WebsiteLayout>
                        <Switch>
                            <Route exact path="/">
                                <IndexWebsite {...props} />
                            </Route>
                            <Route exact path="/products">
                                <Shop {...props} />
                            </Route>
                            <Route exact path="/products/:id">
                                <ShopDetail {...props} />
                            </Route>
                            <Route exact path="/shop/:id">
                                <Product_By_Cate {...props} />
                            </Route>
                            <Route exact path="/contact">
                                <ContactUs {...props} />
                            </Route>
                            <Route exact path="/signup">
                                <Signup />
                            </Route>
                            <Route exact path="/signin">
                                <Signin />
                            </Route>
                        </Switch>
                    </WebsiteLayout>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;
