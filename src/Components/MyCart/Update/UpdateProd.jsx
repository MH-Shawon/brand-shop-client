import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProd = () => {
  const updateProd = useLoaderData();

  const {
    _id,
    
    products_id,
    image,
    product_name,
    brand_name,
    types_of_products,
    
    short_description,
    
  } = updateProd;
    console.log(_id, products_id)
  const handleUpdateProd = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brand = form.brand.value;

    const category = form.category.value;
    
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, brand, category, details, photo };
    

    // send data to the server
    fetch(`https://brand-shop-server-gamma-indol.vercel.app/bookings/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">
        Update Coffee: {product_name}
      </h2>
      <form onSubmit={handleUpdateProd}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="product"
                defaultValue={product_name}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                defaultValue={brand_name}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <select
                className="input input-bordered w-full"
                name="category"
                id=""
              >
                {types_of_products.map((type) => (
                  <option key={type.types_of_products} defaultValue={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <textarea
                className="input input-bordered w-full"
                name="details"
                placeholder="Details"
                defaultValue={short_description}
              ></textarea>
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={image}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Product" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateProd;
