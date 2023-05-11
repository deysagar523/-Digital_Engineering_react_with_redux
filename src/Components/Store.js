import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addCake,
  orderCake,
} from "../Redux/ActionRetFunctions/CakeActionFunctions";
import {
  addIcecream,
  orderIcecream,
} from "../Redux/ActionRetFunctions/IcecreamACtionFunctions";
import { Button } from "@mui/material";
// const Store = (props) => {
//   return (
//     <>
//       <div>Store</div>
//       <div>Total No Of Cakes {props.totalNoOfCakes}</div>
//       <button onClick={props.addCake}>Add Cake</button>
//       <button onClick={props.orderCake}>Order Cake</button>
//     </>
//   );
// };
const Store = () => {
  const totalNoOfCakes = useSelector((state) => state.cake.totalNoOfCakes);
  const totalCakeAmount = useSelector((state) => state.cake.totalAmount);
  const totalNoOfIcecreams = useSelector(
    (state) => state.icecream.totalNoOfIcecreams
  );
  const totalIcecreamAmount = useSelector(
    (state) => state.icecream.totalAmount
  );
  const errorMessageCake = useSelector((state) => state.cake.errorMessage);
  const errorMessageIcecream = useSelector(
    (state) => state.icecream.errorMessage
  );
  const dispatch = useDispatch();
  return (
    <>
      <h1>Store</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1,
            border: "1px solid black",
            margin: "30px 200px",
            padding: "50px 20px",
            height: "250px",
          }}
        >
          <h1 style={{ color: "blue" }}>Cake</h1>
          <h2>
            Total No Of Cakes{" "}
            <span style={{ color: "violet" }}>{totalNoOfCakes}</span>
          </h2>
          <h2>
            Total Amount{" "}
            <span style={{ color: "violet" }}>{totalCakeAmount}</span>
          </h2>
          <Button
            onClick={() => dispatch(addCake())}
            variant="contained"
            style={{ margin: "2px 10px" }}
          >
            Add Cake
          </Button>
          <Button
            onClick={() => dispatch(orderCake())}
            style={{ margin: "2px 10px" }}
            variant="contained"
            color="secondary"
          >
            Order Cake
          </Button>
          {errorMessageCake && (
            <h2 style={{ color: "red" }}>{errorMessageCake}</h2>
          )}
        </div>
        <div
          style={{
            flex: 1,
            border: "1px solid black",
            margin: "30px 200px",
            padding: "50px 20px",
            height: "250px",
          }}
        >
          <h1 style={{ color: "blue" }}>Icecream</h1>
          <h2>
            Total No Of Icecreams{" "}
            <span style={{ color: "violet" }}>{totalNoOfIcecreams}</span>
          </h2>
          <h2>
            Total Amount{" "}
            <span style={{ color: "violet" }}>{totalIcecreamAmount}</span>
          </h2>
          <Button
            onClick={() => dispatch(addIcecream())}
            style={{ margin: "2px 10px" }}
            variant="contained"
          >
            Add Icecream
          </Button>
          <Button
            onClick={() => dispatch(orderIcecream())}
            style={{ margin: "2px 10px" }}
            variant="contained"
            color="secondary"
          >
            Order Icecream
          </Button>
          {errorMessageIcecream && (
            <h2 style={{ color: "red" }}>{errorMessageIcecream}</h2>
          )}
        </div>
      </div>
    </>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     totalNoOfCakes: state.totalNoOfCakes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     orderCake: () => dispatch(orderCake()),
//     addCake: () => dispatch(addCake()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Store);
export default Store;
