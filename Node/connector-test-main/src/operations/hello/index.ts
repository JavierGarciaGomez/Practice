import { Result } from "dispatch";
import { Route } from "OpenApiRouter";

export const handleHello = async (_route: Route): Promise<Result | null> => {
  return {
    status: 200,
    body: {
      message: "Hello, world!",
    },
  };
};
