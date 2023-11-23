import fs from "node:fs";

for (const path of ["test/output"])
  fs.rmSync(path, { force: true, recursive: true });
