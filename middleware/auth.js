import jwt from "jsonwebtoken";

export const validateToken = {
  before: async (request) => {
    try {
      const token = request.event.headers.authorization.replace("Bearer", "");

      if (!token) throw new Error();

      const data = jwt.verify(token, "qwerty654321");
      request.event.id = data.id;
      request.event.username = data.username;

      return request.response;
    } catch (error) {
      request.event.error = "401";

      return request.response;
    }
  },
  onError: async (request) => {
    request.event.error = "401";
    return request.response;
  },
};
