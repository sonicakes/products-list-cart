import pie from "../assets/images/illustration-empty-cart.svg";

const Cart = () => {
    return ( 
    <div className="bg-rose-50 rounded-lg p-5 flex flex-col justify-center items-center">
        <h2 className="font-bold text-xl text-primary-red">Your Cart (count)</h2>
        <img src={pie}/>
        <p className="text-rose-500 text-sm font-semibold">Your added items will appear here</p>
    </div>
     );
}
 
export default Cart;