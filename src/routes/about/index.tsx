import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: index,
});

function index() {
  return <div className="p-2">Hello from AboutPage!</div>;
}
