import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { authStore } from "../auth/authStore";

export type RouterContext = {
  auth: typeof authStore;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
});
