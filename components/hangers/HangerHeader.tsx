import React from "react";
import Link from "next/link";
import { HangerStatus } from "../../types/hanger";

type HangerHeaderProps = {
  name: string;
  status: HangerStatus;
};

export default function HangerHeader({ name, status }: HangerHeaderProps) {
  return (
    <header className="hanger-header">
      <Link href="/workspace" className="hanger-header__back">
        Back to Workspace
      </Link>
      <div className="hanger-header__row">
        <h1 className="hanger-header__title">{name}</h1>
        <span className="hanger-header__status">{status}</span>
      </div>
      <p className="hanger-header__subtitle">
        A stylist workspace designed for collaborative outfit decisions.
      </p>
    </header>
  );
}
