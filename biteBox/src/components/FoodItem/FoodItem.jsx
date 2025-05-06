import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

const FoodItem = ({name, description, id, imageUrl, price}) => {

  const {increaseQty, decreaseQty, quantities, token} = useContext(StoreContext);


  const increase = (id) => {
    if(token !== null && token !== "") {
      increaseQty(id);
    } else {
      toast.warn("Please login to add items to cart.");
    }
  }

  const decrease = (id) => {
    if(token !== null && token !== "") {
      decreaseQty(id);
    } else {
      toast.warn("Please login to remove items from cart.");
    }
  }

  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
    >
      <div class="card"  style={{ "max-width": "320px", "textDecoration": "none"}}>
        <Link to={`/food/${id}`}>
        <img
          src={imageUrl}
          height={200}
          width={60}
          class="card-img-top"
          alt="Product Image"
        />
        </Link>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="h5 mb-0">&#8377;{price}</span>
            <div>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-half text-warning"></i>
              <small class="text-muted">(4.5)</small>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-between bg-light">
          <Link class="btn btn-primary btn-sm" to={`/food/${id}`}>View Food</Link>
          {quantities[id] > 0 ? (
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-danger btn-sm" onClick={() => decrease(id)}>
                <i className="bi bi-dash-circle"></i>
              </button>
              <span className="fw-bold">{quantities[id]}</span>
              <button className="btn btn-success btn-sm" onClick={() => increase(id)}>
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={() => increase(id)}>
              <i className="bi bi-plus-circle"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
