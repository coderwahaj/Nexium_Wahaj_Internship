export default function Product() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="max-w-5xl w-auto hero-content gap-12 flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Spiderman Suit!</h1>
          <p className="py-6">
            Step into the world of your favorite superhero with this authentic
            Spiderman Suit. Perfect for cosplay, parties, or collectors, it
            combines comfort and style so you can swing into action anytime!
          </p>
          <button className="btn btn-primary">Buy Now</button>
        <div className="my-4" />
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="product-faq" defaultChecked />
            <div className="collapse-title font-semibold">
              Is this Spiderman suit machine washable?
            </div>
            <div className="collapse-content text-sm">
              Yes, the suit is machine washable. For best results, use cold water and gentle cycle.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="product-faq" />
            <div className="collapse-title font-semibold">
              Does the suit come in different sizes?
            </div>
            <div className="collapse-content text-sm">
              Absolutely! The suit is available in multiple sizes for both kids and adults.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="product-faq" />
            <div className="collapse-title font-semibold">
              Can I return the suit if it doesn't fit?
            </div>
            <div className="collapse-content text-sm">
              Yes, we offer a hassle-free return policy within 30 days of purchase.
            </div>
          </div>
          </div>
        </div>
      </div> 
  );
}
