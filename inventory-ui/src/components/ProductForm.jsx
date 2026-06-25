import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";
function ProductForm({ onProductAdded, editingProduct, setEditingProduct }) {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    reorderLevel: "",
  });

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct);
    }
  }, [editingProduct]);

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        ...product,
        price: Number(product.price),
        quantity: Number(product.quantity),
        reorderLevel: Number(product.reorderLevel),
      };

      if (editingProduct) {
        await API.put(`/Products/${editingProduct.id}`, data);

        toast.success("Product added successfully!");

        setEditingProduct(null);
      } else {
        await API.post("/Products", data);

        toast.success("Product updated successfully!");
      }

      setProduct({
        name: "",
        category: "",
        price: "",
        quantity: "",
        reorderLevel: "",
      });

      onProductAdded();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-success text-white">
        <h4 className="mb-0">➕ Add New Product</h4>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product name"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category"
                name="category"
                value={product.category}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-2 mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="0"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-1 mb-3">
              <label className="form-label">Qty</label>
              <input
                type="number"
                className="form-control"
                placeholder="0"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-1 mb-3">
              <label className="form-label">Level</label>
              <input
                type="number"
                className="form-control"
                placeholder="0"
                name="reorderLevel"
                value={product.reorderLevel}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button className="btn btn-success">
            <h4 className="mb-0">
              {editingProduct ? "✏️ Update Product" : "➕ Add New Product"}
            </h4>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
