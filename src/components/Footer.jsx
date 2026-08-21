import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="shop-footer" dir="rtl">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-4">
            <div className="brand-mark mb-2">فروشگاه</div>
            <p className="mb-0">
              مجموعه‌ای منتخب از لوازم دیجیتال و اکسسوری با کیفیت بالا و قیمت
              مناسب، مخصوص خریداران وسواسی.
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold text-dark mb-2">لینک‌های سریع</h6>
            <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
              <li>
                <Link to="/">محصولات</Link>
              </li>
              <li>
                <Link to="/cart">سبد خرید</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold text-dark mb-2">تماس با ما</h6>
            <p className="mb-0">info@shopdemo.ir</p>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} فروشگاه — تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
