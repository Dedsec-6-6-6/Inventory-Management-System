import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <Navbar />

            <ProductList />

            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="colored"
            />
        </>
    );
}

export default App;