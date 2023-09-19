import { db } from "./db";

export async function getUser(username) {
  try {
    const user = await db
      .get({
        TableName: "middyTest",
        Key: {
          username: username,
        },
      })
      .promise();

    if (user?.Item) return user.Item;
    else return false;
  } catch (error) {
    console.log(error);
  }
}
