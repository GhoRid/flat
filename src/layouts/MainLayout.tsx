// import { useState } from "react";
// import styled from "styled-components";

// // const menus = [
// //   {
// //     key: "dashboard",
// //     label: "대시보드",
// //     path: "/",
// //     icon: <DashBoardIcon color={colors.app_main_color} />,
// //   },
// //   {
// //     key: "operation",
// //     label: "운영 관리",
// //     path: "/operation",
// //     icon: <SpotManagementIcon color={colors.app_main_color} />,
// //   },
// //   {
// //     key: "sales",
// //     label: "매출 정산",
// //     path: "/sales",
// //     icon: <ReconciliationIcon color={colors.app_main_color} />,
// //   },
// //   {
// //     key: "statistics",
// //     label: "통계",
// //     path: "/statistics",
// //     icon: <StatisticsIcon color={colors.app_main_color} />,
// //   },
// //   {
// //     key: "members",
// //     label: "회원 관리",
// //     path: "/members",
// //     icon: <UserManagementIcon color={colors.app_main_color} />,
// //   },
// // ] as const;

// const MainLayout = ({}) => {
//   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   //   const isBelow1280 = useIsBelowWidthPx(1280);

//   return (
//     <Layout>
//       <HeaderContainer>
//         <LeftSection>
//           <MenuButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
//             <MenuIcon />
//           </MenuButton>
//           <p>리움 문흥점</p>
//         </LeftSection>
//         <LogoButton onClick={() => navigate("/")}>
//           <RiumIcon />
//         </LogoButton>
//         <LogoutButton
//           onClick={() => {
//             clearTokens();
//             window.location.reload();
//           }}
//         >
//           <p>로그아웃</p>
//         </LogoutButton>
//       </HeaderContainer>

//       <Main>
//         <SideBarContainer $isOpen={isSideBarOpen}>
//           <MenuList role="navigation" aria-label="사이드바 메뉴">
//             {/* {menus.map((menu) => (
//               <MenuItemButton
//                 key={menu.key}
//                 $isOpen={isSideBarOpen}
//                 $isActive={location.pathname === menu.path}
//                 onClick={() => {
//                   navigate(menu.path);
//                   isBelow1280 && setIsSideBarOpen(false);
//                 }}
//               >
//                 <IconBox>{menu.icon}</IconBox>
//                 <Label
//                   $isOpen={isSideBarOpen}
//                   $isActive={location.pathname === menu.path}
//                   aria-hidden={!isSideBarOpen}
//                 >
//                   {menu.label}
//                 </Label>
//               </MenuItemButton>
//             ))} */}
//           </MenuList>
//         </SideBarContainer>
//         <OutletContainer $isOpen={isSideBarOpen}>
//           <Outlet />
//         </OutletContainer>
//       </Main>
//     </Layout>
//   );
// };

// export default MainLayout;

// const Layout = styled.div`
//   position: fixed;
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   width: 100vw;
//   box-sizing: border-box;

//   min-width: 300px;
//   overflow: hidden;
//   /* overflow-x: scroll; */
// `;

// const HeaderContainer = styled.div`
//   height: 80px;
//   border-bottom: 1px solid ${colors.border_gray};
//   padding: 20px 25px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   position: relative;

//   @media (max-width: 450px) {
//     padding: 15px 20px;
//     height: 72px;
//   }
// `;

// const MenuButton = styled.button`
//   width: 40px;
//   height: 40px;
//   padding: 0;
//   margin: 0;
//   border: none;
//   background: transparent;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   line-height: 0;

//   svg {
//     width: 40px;
//     height: 40px;
//     display: block;
//   }
// `;

// const LeftSection = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 25px;

//   @media (max-width: 767px) {
//     gap: 15px;
//   }
//   @media (max-width: 500px) {
//     gap: 10px;
//   }

//   p {
//     font-size: 20px;
//     font-weight: 700;

//     @media (max-width: 500px) {
//       font-size: 16px;
//     }
//   }
// `;

// const LogoButton = styled.button`
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 55px;
//   height: 45px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   border: none;
//   background: transparent;
//   padding: 0;

//   @media (max-width: 500px) {
//     width: 45px;
//     height: 35px;
//   }
//   @media (max-width: 350px) {
//     display: none;
//   }
// `;

// const LogoutButton = styled.button`
//   padding: 15px 30px;
//   cursor: pointer;

//   p {
//     color: ${colors.app_black};
//     font-size: 14px;
//     font-weight: 500;
//   }
// `;

// const Main = styled.div`
//   display: flex;
//   flex: 1;
//   position: relative;
// `;

// const SideBarContainer = styled.div<{ $isOpen: boolean }>`
//   width: ${({ $isOpen }) => ($isOpen ? "300px" : "90px")};
//   border-right: ${({ $isOpen }) =>
//     $isOpen ? `1px solid ${colors.border_gray}` : "none"};
//   height: calc(100vh - 80px);
//   background-color: ${colors.app_white};
//   transition: width 0.35s ease;
//   will-change: width;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;

//   @media (max-width: 1440px) {
//     z-index: 10;
//     position: absolute;
//     top: 0;
//     left: 0;
//   }

//   @media (max-width: 768px) {
//     z-index: 10;
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
//   }
// `;

// const MenuList = styled.nav`
//   display: flex;
//   flex-direction: column;
//   padding: 20px 10px;
//   gap: 10px;
// `;

// const MenuItemButton = styled.button<{ $isOpen: boolean; $isActive: boolean }>`
//   height: 50px;
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   border-radius: 10px;
//   cursor: pointer;
//   user-select: none;
//   margin-right: ${({ $isOpen }) => ($isOpen ? "30px" : "0")};
//   transition: all 0.35s ease;

//   background-color: ${({ $isActive, $isOpen }) =>
//     $isOpen
//       ? $isActive
//         ? colors.app_light_gray
//         : "transparent"
//       : "transparent"};

//   svg {
//     opacity: ${({ $isActive }) => ($isActive ? 1 : 0.2)};
//     transition: all 0.35s ease;
//   }

//   &:hover {
//     background-color: ${colors.app_light_gray};

//     span {
//       color: ${colors.app_main_color};
//       opacity: 1;
//     }

//     svg {
//       opacity: 1;
//     }
//   }
// `;

// const IconBox = styled.div`
//   padding-left: 15px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Label = styled.span<{ $isOpen: boolean; $isActive: boolean }>`
//   white-space: nowrap;
//   overflow: hidden;
//   display: inline-block;

//   max-width: ${({ $isOpen }) => ($isOpen ? "200px" : "0px")};
//   opacity: ${({ $isOpen, $isActive }) => ($isOpen ? ($isActive ? 1 : 0.2) : 0)};
//   transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-6px")});
//   transition:
//     max-width 0.35s ease,
//     opacity 0.25s ease,
//     transform 0.35s ease;
//   font-size: 16px;
//   font-weight: 500;
//   color: ${colors.app_main_color};

//   /* color: ${({ $isActive }) =>
//     $isActive ? colors.app_main_color : colors.app_gray}; */
// `;

// const OutletContainer = styled.div<{ $isOpen: boolean }>`
//   flex: 1;
//   height: calc(100vh - 80px);
//   overflow-y: auto;
//   box-sizing: border-box;
//   overflow: scroll;

//   @media (max-width: 1440px) {
//     padding-left: 90px;
//   }

//   @media (max-width: 768px) {
//     padding-left: 0;
//   }
// `;
