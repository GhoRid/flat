import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import styled from "styled-components";
import FlatLogo from "@svgs/FlatLogo.svg?react";

export const Route = createFileRoute("/_headerLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header>
        <Link to="/login">
          <FlatLogo height={20} width={85} />
        </Link>
      </Header>
      <Outlet />
    </>
  );
}

const Header = styled.header`
  height: 60px;
  display: flex;
  padding: 20px 30px;
`;
