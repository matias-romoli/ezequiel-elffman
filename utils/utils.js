import { fileURLToPath } from "url";
import path from "path";

export function URL(meta) {
  const __filename = fileURLToPath(meta);
  return path.dirname(__filename);
}
