import { Badge } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";

export default function ProductCard({ p }) {
  // context
  const [cart, setCart] = useCart();
  // hooks
  const navigate = useNavigate();
  
  return (
    <div className="card ">
      <Badge.Ribbon text={`${p?.sold} sold`} color="red">
        <Badge.Ribbon
          text={`${
            p?.quantity >= 1
              ? `${p?.quantity - p?.sold} in stock`
              : "Out of stock"
          }`}
          placement="start"
          color="green"
        >
          <img
            className="card-img-top"
            src={`https://e-commer-023.vercel.app/api/product/photo/${p._id}`}
            alt={p.name}
            style={{ height: "200px", objectFit: "contain" }}
          />
        </Badge.Ribbon>
      </Badge.Ribbon>

      <div className="card-body">
        <h5>{p?.name.substring(0, 10)}</h5>

        <h4 className="fw-bold">
          {p?.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "BDT",
          })}
        </h4>

        <p className="card-text">{p?.description?.substring(0, 10)}...</p>
      </div>

      <div className="d-flex justify-content-between flex-wrap">
        <button
          className="btn btn-dark col-md-12 mt-2 card-button"
          style={{ borderBottomLeftRadius: "5px" }}
          onClick={() => navigate(`/product/${p.slug}`)}
        >
          View Product
        </button>

        <button
          className="btn btn-success col-md-12 mt-2 card-button"
          style={{ borderBottomRightRadius: "5px" }}
          onClick={() => {
            setCart([...cart, p]);
            localStorage.setItem("cart", JSON.stringify([...cart, p]));
            toast.success("Added to cart");
          }}
        >
          Add to Cart
        </button>
      </div>

      {/* <p>{moment(p.createdAt).fromNow()}</p>
      <p>{p.sold} sold</p> */}
    </div>
  );
}
