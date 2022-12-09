import { rest } from "msw";
import { apiUrl, books } from "../../constants";
import { server } from "./server";

export const successfulBookListRequest = () => {
  return server.use(
    rest.get(`${apiUrl}/books`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          results: [...books],
        }),
      );
    }),
  );
};

export const failedBooklistRequest = () => {
  return server.use(
    rest.get(`${apiUrl}/books`, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );
};
