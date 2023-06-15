// 외부 의존성
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

declare global {
  var _mongo: any;
}

// 전역 변수
const collections: { forum?: mongoDB.Collection } = {};
let connectDB: any;

dotenv.config();

const dbConnectionString = process.env.DB_CONN_STRING;
const forumCollectionName = process.env.FORUM_COLLECTION_NAME;

// env 타입스크립트 에러 방지용
if (!dbConnectionString || !forumCollectionName) {
  throw new Error(
    "DB_CONN_STRING or FORUM_COLLECTION_NAME is not defined in the environment variables."
  );
}
// 연결 초기화

// 개발용 세팅
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(dbConnectionString).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(dbConnectionString).connect();
}

//mongoDB 공식 타입스크립트 코드
async function connectToDatabase() {
  // env 타입스크립트 에러 방지용
  if (!dbConnectionString || !forumCollectionName) {
    throw new Error(
      "DB_CONN_STRING or FORUM_COLLECTION_NAME is not defined in the environment variables."
    );
  }

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    dbConnectionString
  );
  await client.connect();
  const db: mongoDB.Db = client.db(process.env.DB_NAME);
  const forumCollection: mongoDB.Collection =
    db.collection(forumCollectionName);
  collections.forum = forumCollection;
  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${forumCollection.collectionName}`
  );
}

export { collections, connectDB, connectToDatabase };
