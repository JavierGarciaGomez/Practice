import { Route } from "OpenApiRouter";

import { getRocketInfo } from "operations/getRocketInfo";
import { handleHello } from "operations/hello";

export interface Result {
  body?: any;
  status: number;
  headers?: Record<string, string>;
}

export const dispatch = async (route: Route): Promise<Result | null> => {
  switch (route.operation.operationId) {
    case "hello":
      return await handleHello(route);

    // TODO Add this
    case "rocketsOne":
      return await getRocketInfo(route);
    default:
      return null;
  }
};
