import Footer from "../components/website/footer";
import Header from "../components/website/header";

const WebsiteLayout = (props) => {
    return (
        <>
            <div className="App">
                <div>
                    <Header />
                    <div className="container-fluid">
                        <div className="row">
                            <main className="">
                                {props.children}
                            </main>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default WebsiteLayout