import type { Metadata } from "next";
import { TeamContent } from "./team-content";
import { TeamExperience } from "./team-experience";
import "./team-reference.css";

export const metadata: Metadata = {
  title: "Team · Profound Ventures",
  description: "A team of investors and operators building alongside Israel's next generation of founders.",
};

export default function TeamPage() {
  return <TeamExperience className=""><TeamContent /></TeamExperience>;
}
