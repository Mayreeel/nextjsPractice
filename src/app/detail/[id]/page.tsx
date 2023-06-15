export default async function Detail(props: any) {
  const dataRes = await fetch(
    `http://localhost:3000/api/post/${props.params.id}`,
    { cache: "no-store" }
  );
  const data = await dataRes.json();
  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
    </div>
  );
}
