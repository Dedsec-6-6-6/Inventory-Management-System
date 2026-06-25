import { useEffect, useState } from "react";
import API from "../services/api";
import ProductForm from "../components/ProductForm";
import { toast } from "react-toastify";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [editingProduct, setEditingProduct] = useState(null);

    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase())
    );

    // Load Products
    const loadProducts = async () => {
        try {
            setLoading(true);

            const response = await API.get("/Products");

            setProducts(response.data);
        } catch (error) {
            console.error("Error loading products:", error);
            toast.error("Failed to load products.");
        } finally {
            setLoading(false);
        }
    };

    // Delete Product
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {
            await API.delete(`/Products/${id}`);
            toast.success("Product deleted successfully!");
            loadProducts();
        } catch (error) {
            console.error("Delete Error:", error);
            toast.error("Failed to delete product.");
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    // Loading Spinner
    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div
                    className="spinner-border text-primary"
                    style={{ width: "4rem", height: "4rem" }}
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>

                <h4 className="mt-3">Loading Products...</h4>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">📦 Inventory Management System</h2>

            {/* Dashboard Cards */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card bg-primary text-white shadow">
                        <div className="card-body text-center">
                            <h5>Total Products</h5>
                            <h1>{products.length}</h1>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card bg-success text-white shadow">
                        <div className="card-body text-center">
                            <h5>Total Quantity</h5>
                            <h1>{products.reduce((sum, p) => sum + p.quantity, 0)}</h1>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card bg-danger text-white shadow">
                        <div className="card-body text-center">
                            <h5>Low Stock</h5>
                            <h1>
                                {
                                    products.filter((p) => p.quantity <= p.reorderLevel).length
                                }
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Search by product name or category..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col-md-6 text-end">
                    <span className="badge bg-primary fs-6">
                        Products Found: {filteredProducts.length}
                    </span>
                </div>
            </div>

            {/* Product Form */}
            <ProductForm
                onProductAdded={loadProducts}
                editingProduct={editingProduct}
                setEditingProduct={setEditingProduct}
            />

            {/* Product Table */}
            <table className="table table-bordered table-hover mt-4">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Stock Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>

                            <td>{product.name}</td>

                            <td>
                                <span className="badge bg-info text-dark">
                                    {product.category}
                                </span>
                            </td>

                            <td>
                                {Number(product.price).toLocaleString("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                })}
                            </td>

                            <td>{product.quantity}</td>

                            <td>
                                {product.quantity === 0 ? (
                                    <span className="badge bg-danger">
                                        Out of Stock
                                    </span>
                                ) : product.quantity <= product.reorderLevel ? (
                                    <span className="badge bg-warning text-dark">
                                        Low Stock
                                    </span>
                                ) : (
                                    <span className="badge bg-success">
                                        In Stock
                                    </span>
                                )}
                            </td>

                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => setEditingProduct(product)}
                                >
                                    ✏️ Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    🗑 Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;