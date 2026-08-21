import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, removeItem, clearCart } from "../Cart/Store"
import Cart from "../components/Cart";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="container py-4" dir="rtl">
      <h4 className="section-heading mb-3">سبد خرید</h4>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <Cart
            items={items}
            totalQuantity={totalQuantity}
            totalPrice={totalPrice}
            onIncrease={(item) => dispatch(addItem(item))}
            onDecrease={(item) => dispatch(removeItem(item))}
            onClear={() => dispatch(clearCart())}
            onContinueShopping={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}
