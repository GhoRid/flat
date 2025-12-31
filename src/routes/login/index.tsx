import { createFileRoute } from "@tanstack/react-router";
import DashBoardIcon from "@svgs/dashboard.svg?react";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/login"!
      <DashBoardIcon />
    </div>
  );
}
