import "./Product.css";
import Price from "./Price.jsx";

function Product( {title ,idx} ) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [["8,000 DPI","intuitive"], ["intuitive surface", "surface"], ["designed for iPad Pro", "intuitive surface"], ["wireless", "designed for iPad Pro"] ];
    return (
        <div className="Product">
            <p>{title}</p>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]}/>
        </div>
    );
}

export default Product;