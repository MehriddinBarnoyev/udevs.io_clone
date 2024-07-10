import employees from "../../../data/members";

export default function handler(req, res) {
  res.status(200).json({ members: employees });
}
