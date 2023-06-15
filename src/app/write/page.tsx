export default async function Write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" placeholder="글제목"></input>
        <input type="text" name="content" placeholder="글내용"></input>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
