import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Cart/Store";
import Toast from "./Toast";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=60";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id),
  );

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setShowToast(true);
  };

  return (
    <div className="col">
      <div className="card product-card h-100">
        <div className="img-wrap">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <span className="category-pill mb-2">{product.category}</span>
            <h6 className="product-name mt-2 mb-0">{product.name}</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="product-price">${product.price}</span>

            {cartItem ? (
              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => dispatch(removeItem(product))}
                  aria-label="کاهش تعداد"
                >
                  -
                </button>
                <span className="fw-bold px-1">{cartItem.quantity}</span>
                <button
                  type="button"
                  className="qty-btn"
                  onClick={handleAddToCart}
                  aria-label="افزایش تعداد"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-add-cart"
                onClick={handleAddToCart}
              >
                + افزودن
              </button>
            )}
          </div>
        </div>
      </div>

      <Toast
        message={`«${product.name}» به سبد خرید اضافه شد.`}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
