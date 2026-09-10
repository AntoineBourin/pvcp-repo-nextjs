"use client";

import { useState } from "react";

type ExpandablePanelProps = {
  title: string;
  children: React.ReactNode;
};

export default function ExpandablePanel({
  title,
  children,
}: ExpandablePanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen((prev) => !prev)}>
        {open ? "Hide" : "Show"} {title}
      </button>
      {open ? <div>{children}</div> : null}
    </div>
  );
}
