import Link from "next/link";

export default async function List() {
  const dataRes = await fetch("http://localhost:3000/api/list", {
    cache: "no-store",
  });
  const timeRes = await fetch("http://localhost:3000/api/date", {
    cache: "no-store",
  });
  const data = await dataRes.json();
  const time = await timeRes.json();
  return (
    <div className="list-bg">
      {data.map((a: any, i: any) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${a._id}`}>
            <h4>{a.title}</h4>
          </Link>
          <Link href={"/edit/" + a._id}>✏️</Link>
          <p>{time}</p>
        </div>
      ))}
    </div>
  );
}
