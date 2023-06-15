import { connectDB } from "../../../util/services/database.service";
import { ObjectId } from "mongodb";

interface resultObject {
  _id: ObjectId;
  title: string;
  content: string;
}

export default async function handler(요청: any, 응답: any) {
  let client = await connectDB;
  const db = client.db("forum");

  if (요청.method === "POST") {
    console.log(요청.body);
    if (요청.body.title == "") {
      return 응답.status(500).json("제목써라");
    }
    try {
      await db
        .collection("post")
        .insertOne(요청.body, function (err: any, result: any) {
          console.log("저장 완료");
        });

      응답.redirect(302, "/list");
    } catch (err) {
      console.log(err);
    }
  }
}
