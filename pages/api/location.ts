// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { ip } = req.query;
    let result = await fetch(`http://ip-api.com/json/${ip}`);
    result = await result.json();

    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({
      message:
        "Whoops! There seems to have been an error on our end. Contact hauntedhouse@hackclub.com to report/for any other concerns.",
      error: true,
    });
  }
}
