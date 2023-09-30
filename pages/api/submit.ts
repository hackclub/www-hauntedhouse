// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

type Data = {
  message: string;
  error?: boolean;
};

type Body = {
  name: string;
  email: string;
  age: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const body: Body = JSON.parse(req.body);

  // Check for blank fields
  if (!body.name || !body.email || !body.age) {
    res.status(400).send({ message: "All fields are required" });
    return;
  }

  // Check age limit
  if (body.age < 13 || body.age >= 18) {
    res.status(418).send({
      message:
        "Woah there, Haunted House is meant for high schoolers between 13 and 17 years old. Contact hauntedhouse@hackclub.com if you think this is a mistake.",
    });
    return;
  }

  const base = Airtable.base("appl7i287x5O6NeX8");

  try {
    base("Signups").create([
      {
        fields: {
          Name: body.name,
          Email: body.email,
          Age: body.age,
        },
      },
    ]);

    res.status(200).send({ message: "Created successfully" });
  } catch (err) {
    res.status(200).send({
      message:
        "Whoops! There seems to have been an error on our end. Contact hauntedhouse@hackclub.com to report/for any other concerns.",
      error: true,
    });
  }
}
