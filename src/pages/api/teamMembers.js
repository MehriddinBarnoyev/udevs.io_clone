// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import teamMembers01 from "../../../data/teamMembers";

export default function handler(req, res) {
  res.status(200).json({ teamMembers:teamMembers01 });
}
