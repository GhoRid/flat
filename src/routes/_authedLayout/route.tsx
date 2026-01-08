import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authedLayout")({
  // beforeLoad: ({ context, location }) => {
  //   if (!context.auth.isLoggedIn()) {
  //     throw redirect({
  //       to: "/login",
  //       search: { redirect: location.href },
  //     });
  //   }
  // },
  component: () => <Outlet />,
});
