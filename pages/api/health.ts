/* =========================================================================== */
/* Section: Imports                                                            */
/* =========================================================================== */

import type { NextApiRequest, NextApiResponse } from "next";

/* =========================================================================== */
/* Section: Interfaces                                                         */
/* =========================================================================== */

type Data = {
  message: string;
  version: string | undefined;
};

/* =========================================================================== */
/* Section: Constants                                                          */
/* =========================================================================== */

const version = process.env.npm_package_version;
const message = "Health OK";

/* =========================================================================== */
/* Section: Main                                                               */
/* =========================================================================== */

const health = (req: NextApiRequest, res: NextApiResponse<Data>) =>
  res.status(200).json({ message, version });

export default health;
