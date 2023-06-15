import { connectDB } from "../../../util/services/database.service";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
  const { id } = req.query;

  if (!id || id.length !== 24 || !/^[0-9a-fA-F]+$/.test(id)) {
    // 24자리 16진수 문자열이 아닌 경우 오류를 반환
    return res.status(400).json({ error: "Invalid ID" });
  }

  let client = await connectDB;
  const db = client.db("forum");

  if (req.method === "GET") {
    console.log(req.body);
    if (req.body.title == "") {
      return res.status(500).json("제목써라");
    }
    try {
      let result = await db
        .collection("post")
        .findOne({ _id: new ObjectId(id) });
      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  }
  if (req.method === "PUT") {
    console.log(req.body);
    if (req.body.title == "") {
      return req.status(500).json("제목써라");
    }
    try {
      let parsedBody =
        typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      console.log(parsedBody);
      const { _id, ...fieldsToUpdate } = parsedBody;
      await db
        .collection("post")
        .updateOne(
          { _id: new ObjectId(id) },
          { $set: fieldsToUpdate },
          { upsert: true }
        );
      return res.status(200).json("수정 성공");
    } catch (err) {
      console.log(err);
    }
  }
}
