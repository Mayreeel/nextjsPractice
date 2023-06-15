export default async function dateHandler(요청: any, 응답: any) {
  let today = new Date();
  if (요청.method === "GET")
    return 응답.status(200).json(today.toLocaleDateString());
}
