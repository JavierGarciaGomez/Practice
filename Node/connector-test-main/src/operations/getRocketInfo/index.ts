import { Result } from "dispatch";
import { Route } from "OpenApiRouter";
import https from "https";
import { IRocket } from "interfaces/interfaces";

export const getRocketInfo = async (_route: Route): Promise<Result | null> => {
  const rocketId = _route.pathParameters.rocketId;

  const getData = (): Promise<IRocket> =>
    new Promise((resolve: any, reject: any) => {
      https

        .get(`https://api.spacexdata.com/v3/rockets/${rocketId}`, (resp) => {
          let data: any = "";

          // A chunk of data has been received.
          resp.on("data", (chunk) => {
            console.log({ chunk });
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on("end", () => {
            resolve(JSON.parse(data));
          });
        })
        .on("error", (err) => {
          reject(err);
        });
    });

  const rocket: IRocket = await getData();
  const newRocket = {
    id: rocket.id,
    company: rocket.company,
    country: rocket.country,
    main_image: rocket.flickr_images[0],
    cost_per_launch: {
      amount: rocket.cost_per_launch,
      currency: "USD",
    },
  };
  // console.log(y);

  return {
    status: 200,
    body: {
      rocket: newRocket,
    },
  };
};
