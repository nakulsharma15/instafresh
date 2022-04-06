import "./Styles/Card.css";

export default function Card({ Item }) {

    return (
        <>
            <div class="instafresh-card card card-with-badge card-with-text-overlay">

                <div class="card-img flex-justify-center">
                    <img class="card-img flex-justify-center" src={Item.imageUrl} alt="Product" />
                </div>

                <div class="card-title item-price-detail">
                    <h3>{Item.name}</h3>
                    <p>₹{Item.price}  {!(Item.discount === 0) ? <s class="text-s">₹{Item.prevPrice}</s> : null}</p>
                </div>

                <div className="discount-badge">
                    {!(Item.discount === 0) ? <div class="discount special-badge text-overlay">{Item.discount}% off</div> : null}
                </div>

                <div class="card-info flex-sb-c">
                    {Item.quantity}
                    <div class="badge-rating text-m product-rating">
                        <i class="fas fa-star"></i>
                        {Item.rating}
                    </div>
                </div>

                <div class="card-footer">
                    <button class="add-to-cart-btn btn icon-btn"> Add to Cart</button>
                    <button class="card-icon"><i class="far fa-heart"></i></button>
                </div>
                
            </div>

        </>)
}