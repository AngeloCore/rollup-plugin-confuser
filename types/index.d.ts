import { Plugin } from "rollup";
import { FilterPattern } from "@rollup/pluginutils";
import { obfuscate } from "js-confuser";
type ObfuscateOptions = Parameters<typeof obfuscate>[1];
interface Options {
  options: ObfuscateOptions;
  global: boolean;
  include: FilterPattern;
  exclude: FilterPattern;
}
export default function confuser(override?: Partial<Options>): Plugin;
export {};
