import { NextApiHandler } from "next";
import data from "../../../lib/poems.json";

const poem: NextApiHandler = (req, res) => {
  const { id } = req.query;
  const poemData = data.find((x) => String(x.id) === String(id));

  if (poemData) {
    res.status(200).json(poemData);
  } else {
    res.status(404).end();
  }
};

export default poem;
