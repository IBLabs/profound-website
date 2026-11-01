import type { Metadata } from "next";
import { pageMetadata } from "../social";
import { TeamContent } from "./team-content";
import { TeamExperience } from "./team-experience";
import "./team-reference.css";

export const metadata: Metadata = pageMetadata("Team · Profound Ventures", "A team of investors and operators building alongside Israel's next generation of founders.", "/team");

export default function TeamPage() {
  return <TeamExperience className=""><TeamContent /></TeamExperience>;
}
