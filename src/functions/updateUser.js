import { sendResponse } from "../responses/index.js";

export const handler = async (event) => {
  try {
    return sendResponse(200, {
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
