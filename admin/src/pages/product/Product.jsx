import { Link, useHistory, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useRef } from "react";
import { updateProduct } from "../../redux/apiCalls";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const [inputs, setInputs] = useState(product);
  const [cat, setCat] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
    setInputs((prev) => ({ ...prev, categories : cat}));
  };

  const handleColor = (e) => {
    setColor(e.target.value.split(","));
    setInputs((prev) => ({ ...prev, color : color}));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(","));
    setInputs((prev) => ({ ...prev, size : size}));
  };

  console.log(inputs);
  const handleUpdate = (e)=>{
    e.preventDefault();
    const {createdAt, updatedAt,__v,_id , ...newProduct} = inputs;
    updateProduct(productId,newProduct,dispatch);
    window.alert("sua thanh cong!")
    history.goBack();
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product?.img} alt="" className="productInfoImg" />
            <span className="productName">{product?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product?.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              onChange={ handleChange}
              name="title"
              type="text"
              placeholder={product?.title}
            />
            <label>Product Description</label>
            <input
              onChange={ handleChange}
              name="desc"
              type="text"
              placeholder={product?.desc}
            />
            <label>Price</label>
            <input
              onChange={handleChange}
              name="price"
              type="text"
              placeholder={product?.price}
            />
            <label>Categories</label>
            <input onChange={handleCat} type="text" placeholder={product?.categories.toString()} />
            <label>Size</label>
            <input onChange={handleSize} type="text" placeholder={product?.size.toString()} />
            <label>Color</label>
            <input onChange={handleColor} type="text" placeholder={product?.color.toString()} />
            <label>In Stock</label>
            <select onChange={ handleChange} name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product?.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input onChange={handleChange} name="img" type="file" id="file" style={{ display: "none" }} />
            </div>
            <button type="button" onClick={handleUpdate} className="productButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
