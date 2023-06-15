import { connectDB } from "../../util/services/database.service";
import { ObjectId } from "mongodb";

interface resultObject {
  _id: ObjectId;
  title: string;
  content: string;
}

export default async function listHandler(req: any, res: any) {
  let client = await connectDB;
  const db = client.db("forum");
  let result: resultObject[] = await db.collection("post").find().toArray();
  if (req.method === "GET") return res.status(200).json(result);
}
