import { Bot } from "mineflayer";
import { PVP } from "../PVP";

export type PVPBot = Bot & {
  pvp: PVP
}
