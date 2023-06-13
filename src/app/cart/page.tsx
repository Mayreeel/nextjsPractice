export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem 장바구니={장바구니[0]} />
      <CartItem 장바구니={장바구니[1]} />
    </div>
  );
}

function CartItem(props: any) {
  return (
    <div className="cart-item">
      <p>{props.장바구니}</p>
      <p>$40</p>
      <p>1개</p>
      <Button color="red" />
      <Button color="blue" />
      <Banner content="롯데카드" />
      <Banner content="현대카드" />
    </div>
  );
}

function Banner(props: any) {
  return <h5>{props.content} 현대카드 결제 행사중</h5>;
}

function Button(props: any) {
  return <button style={{ background: `${props.color}` }}>버튼</button>;
}
