import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "لپ‌تاپ گیمینگ ایسوس",
    price: 1500,
    category: "دیجیتال",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "گوشی آیفون 15",
    price: 800,
    category: "موبایل",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "هدفون بی‌سیم سونی",
    price: 200,
    category: "صوتی",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "کیبورد مکانیکی",
    price: 90,
    category: "جانبی",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "ماوس گیمینگ",
    price: 60,
    category: "جانبی",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "ساعت هوشمند",
    price: 250,
    category: "گجت",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "تبلت سامسونگ گلکسی",
    price: 550,
    category: "دیجیتال",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "اسپیکر بلوتوثی",
    price: 120,
    category: "صوتی",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    name: "دوربین دیجیتال کانن",
    price: 700,
    category: "دیجیتال",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 10,
    name: "کفش ورزشی نایک",
    price: 130,
    category: "کفش",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 11,
    name: "کوله‌پشتی سفری",
    price: 85,
    category: "کیف",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 12,
    name: "ژاکت اسپرت مردانه",
    price: 95,
    category: "پوشاک",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 13,
    name: "عینک آفتابی کلاسیک",
    price: 70,
    category: "اکسسوری",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 14,
    name: "چراغ رومیزی مدرن",
    price: 45,
    category: "خانه",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 15,
    name: "کیف پول چرمی",
    price: 40,
    category: "اکسسوری",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: 16,
    name: "تلویزیون هوشمند ال‌جی",
    price: 900,
    category: "خانه",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&auto=format&fit=crop&q=60",
  },
];

export default function Home() {
  return (
    <div className="container py-4" dir="rtl">
      <div className="mb-3">
        <h4 className="section-heading mb-1">فروشگاه محصولات</h4>
        <p className="section-subheading mb-3">
          {products.length} محصول در دسته‌بندی‌های مختلف
        </p>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
