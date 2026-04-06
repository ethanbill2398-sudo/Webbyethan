import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/Users/ethanbill/web-by-ethan/tina/__generated__/.cache/1775442025406', url: 'http://localhost:4001/graphql', token: '', queries,  });
export default client;
  