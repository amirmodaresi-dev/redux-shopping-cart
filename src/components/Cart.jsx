export default function Cart({
  items,
  totalQuantity,
  totalPrice,
  onIncrease,
  onDecrease,
  onClear,
  onContinueShopping,
}) {
  return (
    <div id="cart" className="card cart-panel p-3 p-md-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold m-0">سبد خرید</h4>
        {items.length > 0 && (
          <button className="btn btn-sm btn-outline-danger" onClick={onClear}>
            حذف همه
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="emoji">🛒</div>
          <p className="fw-semibold mb-1">سبد خرید شما خالی است</p>
          <p className="section-subheading mb-3">
            محصولی برای نمایش وجود ندارد، اولین خرید خود را ثبت کنید.
          </p>
          <button
            type="button"
            className="btn btn-continue-shopping px-4"
            onClick={onContinueShopping}
          >
            ادامه‌ی خرید
          </button>
        </div>
      ) : (
        <>
          <div className="list-group list-group-flush mb-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center px-0 py-3 flex-wrap gap-2"
              >
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-muted">
                      ${item.price} × {item.quantity} = ${item.totalPrice}
                    </small>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="qty-btn"
                    onClick={() => onDecrease(item)}
                    aria-label="کاهش تعداد"
                  >
                    -
                  </button>
                  <span className="fw-bold px-1">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => onIncrease(item)}
                    aria-label="افزایش تعداد"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-top pt-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">تعداد کل کالاها:</span>
              <span className="fw-bold">{totalQuantity} عدد</span>
            </div>
            <div className="d-flex justify-content-between mb-3 fs-5">
              <span className="fw-bold">مبلغ قابل پرداخت:</span>
              <span className="fw-bold text-success">${totalPrice}</span>
            </div>
            <button className="btn btn-checkout btn-success w-100 text-white">
              تکمیل خرید و پرداخت
            </button>
          </div>
        </>
      )}
    </div>
  );
}
