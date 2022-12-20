// import from react-icons
import { FaChess, FaChessPawn, FaQuestionCircle } from "react-icons/fa";
import { ImEarth } from "react-icons/im";

// import from SidebarNavigation
import SidebarNavigationItem from '../SidebarNavigation/sidebar_navigation_item';

// import from AuthButtons
import AuthButtons from '../AuthButtons';

const SidebarItem = [
  { title: "Play", icon: <FaChessPawn className="text-green-200 text-sidebar_icon ml-3" />  },
  { title: "Puzzles", icon: <FaChessPawn className="text-green-200 text-sidebar_icon ml-3" /> },
  { title: "Learn", icon: <FaChessPawn className="text-green-200 text-sidebar_icon ml-3" /> },
  { title: "Watch", icon: <FaChessPawn className="text-green-200 text-sidebar_icon ml-3" /> },
  { title: "News", icon: <FaChessPawn className="text-green-200 text-sidebar_icon ml-3" /> },
  { title: "Social", icon: <FaChessPawn className="text-green-200 text-sidebar_icon ml-3" /> },
  { title: "More", icon: <FaChessPawn className="text-green-200 text-sidebar_icon ml-3" /> },
];

const SidebarItemContainer = () => <>
    {SidebarItem.map((item, index) => <SidebarNavigationItem item={item} key={index} />)}
</>

const Index = () => {
  return (
    <nav className="col-span-1 bg-bg-sidebar md:h-screen md:sticky top-0">
      <div className="md:block flex bg-red-400 items-stretch">
        <div className="md:flex justify-center items-center cursor-pointer
        hover:bg-bg-sidebar-hover
        mt-2 py-1">
          <h1 className="text-white font-bold text-2xl">ChessTP</h1>
        </div>

        <ul className="mt-496 hidden">
          <SidebarItemContainer />
        </ul>

          <AuthButtons />
      </div>
    </nav>
  );
};

export default Index;
