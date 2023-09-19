import middy from "@middy/core";
import { sendResponse } from "../responses/index.js";
import { getUser } from "../services/users.js";
import { validateToken } from "../../middleware/auth.js";

export const handler = middy()
  .handler(async (event) => {
    try {
      if (!event?.id || (event?.error && event?.error === "401"))
        return sendResponse(401, { success: false, message: "Invalid token" });

      const user = await getUser(event.username);

      if (!user)
        return sendResponse(401, { success: false, message: "No user found" });

      return sendResponse(200, {
        success: true,
      });
    } catch (error) {
      return sendResponse(400, {
        success: false,
        message: "Could not get user",
      });
    }
  })
  .use(validateToken);
