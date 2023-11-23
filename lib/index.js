import { createFilter } from "@rollup/pluginutils";
import { obfuscate } from "js-confuser";
import { merge } from "smob";

export default function confuser(override = {}) {
  const options = merge(override, {
    options: { preset: "medium", target: "node" },
    global: true
  });
  const filter = createFilter(options.include, options.exclude);

  console.log(options.global);

  return {
    name: "confuser",
    transform: async (code, id) => {
      if (options.global || !filter(id)) return null;

      return await obfuscate(code, {
        ...options.options
      });
    },
    renderChunk: (code) => {
      if (!options.global) return null;

      return obfuscate(code, {
        ...options.options
      });
    }
  };
}
