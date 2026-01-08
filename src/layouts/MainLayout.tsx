import { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { clearTokens } from "../utils/token";
import MenuIcon from "@svgs/menu.svg?react";
import FlatLogo from "@svgs/FlatLogo.svg?react";
import DashBoardIcon from "@svgs/Dashboard.svg?react";
import FinancialManagementIcon from "@svgs/FinancialManagement.svg?react";
import MemberManagementIcon from "@svgs/MemberManagement.svg?react";
import AdmissionsManagementIcon from "@svgs/AdmissionsManagement.svg?react";
import ClassManagementIcon from "@svgs/ClassManagement.svg?react";
import ConsultationManagementIcon from "@svgs/ConsultationManagement.svg?react";
import InstructorManagementIcon from "@svgs/InstructorManagement.svg?react";
import HomeIcon from "@svgs/Home.svg?react";

const menus = [
  {
    key: "dashboard",
    label: "대시보드",
    path: "/about",
    icon: <DashBoardIcon />,
  },
  {
    key: "finance",
    label: "재무 관리",
    path: "/finance",
    icon: <FinancialManagementIcon />,
  },
  {
    key: "members",
    label: "수강생 관리",
    path: "/members",
    icon: <MemberManagementIcon />,
  },
  {
    key: "admissions",
    label: "입시 관리",
    path: "/admissions",
    icon: <AdmissionsManagementIcon />,
  },
  {
    key: "classes",
    label: "수업 관리",
    path: "/classes",
    icon: <ClassManagementIcon />,
  },
  {
    key: "consultations",
    label: "상담 관리",
    path: "/consultations",
    icon: <ConsultationManagementIcon />,
  },
  {
    key: "hr",
    label: "인사 관리",
    path: "/hr",
    icon: <InstructorManagementIcon />,
  },
  {
    key: "operations",
    label: "운영 관리",
    path: "/operations",
    icon: <HomeIcon />,
  },
] as const;

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  //   const isBelow1280 = useIsBelowWidthPx(1280);

  return (
    <Layout>
      <HeaderContainer>
        <LeftSection>
          <MenuButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
            <MenuIcon />
          </MenuButton>
          <FlatLogo width={64} height={15} />
        </LeftSection>

        <LogoutButton
          onClick={() => {
            clearTokens();
            window.location.reload();
          }}
        >
          <p>로그아웃</p>
        </LogoutButton>
      </HeaderContainer>

      <Main>
        <SideBarContainer $isOpen={isSideBarOpen}>
          <MenuList role="navigation" aria-label="사이드바 메뉴">
            {menus.map((menu) => (
              <MenuItemButton
                key={menu.key}
                $isOpen={isSideBarOpen}
                $isActive={location.pathname === menu.path}
                onClick={() => {
                  navigate({ to: menu.path });
                  //   isBelow1280 && setIsSideBarOpen(false);
                }}
              >
                <IconBox>{menu.icon}</IconBox>
                <Label
                  $isOpen={isSideBarOpen}
                  $isActive={location.pathname === menu.path}
                  aria-hidden={!isSideBarOpen}
                >
                  {menu.label}
                </Label>
              </MenuItemButton>
            ))}
          </MenuList>
        </SideBarContainer>
        <OutletContainer $isOpen={isSideBarOpen}>{children}</OutletContainer>
      </Main>
    </Layout>
  );
};

export default MainLayout;

const Layout = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  min-width: 300px;
  overflow: hidden;
  /* overflow-x: scroll; */
`;

const HeaderContainer = styled.div`
  height: 55px;
  border-bottom: 1px solid ${colors.border_gray};
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  @media (max-width: 450px) {
    padding: 15px 20px;
    height: 72px;
  }
`;

const MenuButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  svg {
    width: 22px;
    height: 22px;
    display: block;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 767px) {
    gap: 15px;
  }
  @media (max-width: 500px) {
    gap: 10px;
  }

  p {
    font-size: 20px;
    font-weight: 700;

    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

const LogoutButton = styled.button`
  padding: 15px 30px;
  cursor: pointer;

  p {
    color: ${colors.app_black};
    font-size: 14px;
    font-weight: 500;
  }
`;

const Main = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

const SideBarContainer = styled.div<{ $isOpen: boolean }>`
  width: ${({ $isOpen }) => ($isOpen ? "300px" : "66px")};
  border-right: ${({ $isOpen }) =>
    $isOpen ? `1px solid ${colors.border_gray}` : "none"};
  height: calc(100vh - 55px);
  background-color: ${colors.white};
  transition: width 0.35s ease;
  will-change: width;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  /*   @media (max-width: 1440px) {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
  } */
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  gap: 10px;
`;

const MenuItemButton = styled.button<{ $isOpen: boolean; $isActive: boolean }>`
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  margin-right: ${({ $isOpen }) => ($isOpen ? "30px" : "0")};
  transition: all 0.35s ease;
  color: ${colors.app_black};

  background-color: ${({ $isActive, $isOpen }) =>
    $isOpen ? ($isActive ? colors.light_gray : "transparent") : "transparent"};

  svg {
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0.2)};
    transition: all 0.35s ease;
    width: 22px;
    height: 22px;
  }

  &:hover {
    background-color: ${colors.light_gray};

    span {
      color: ${colors.app_black};
      opacity: 1;
    }

    svg {
      opacity: 1;
    }
  }
`;

const IconBox = styled.div`
  margin-left: 7px;
  width: 22px;
  height: 22px;
  flex: 0 0 22px;
  display: grid;
  place-items: center;

  /* ✅ svg가 부모 크기 그대로 따라오게 */
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const Label = styled.span<{ $isOpen: boolean; $isActive: boolean }>`
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;

  max-width: ${({ $isOpen }) => ($isOpen ? "200px" : "0px")};
  opacity: ${({ $isOpen, $isActive }) => ($isOpen ? ($isActive ? 1 : 0.2) : 0)};
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-6px")});
  transition:
    max-width 0.35s ease,
    opacity 0.25s ease,
    transform 0.35s ease;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.app_black};

  /* color: ${({ $isActive }) =>
    $isActive ? colors.main_color : colors.gray}; */
`;

const OutletContainer = styled.div<{ $isOpen: boolean }>`
  flex: 1;
  height: calc(100vh - 80px);
  overflow-y: auto;
  box-sizing: border-box;
  overflow: scroll;
  width: 100%;
`;
