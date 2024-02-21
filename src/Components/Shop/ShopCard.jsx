
import { Link } from "react-router-dom";

const ShopCard = ({ shop }) => {
  const {  brand,thumbnails } = shop;
  return (
    <Link to={`/brandProducts/${brand}`} className="card bg-base-100  image-full">
      <figure>
        <img src={thumbnails} alt="Shoes" />
      </figure>
    </Link>
  );
};

export default ShopCard;
