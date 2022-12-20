export interface Item {
  title: string;
  icon: JSX.Element;
}

const sidebar_navigation_item = ({ item }: { item: Item }) => {
  const { title, icon } = item;
  return (
    <li className="flex cursor-pointer hover:bg-bg-sidebar-hover py-3 duration-150">
      {icon}
      <h1 className="text-white font-bold text-sidebar_font ml-3">{title}</h1>
    </li>
  );
};

export default sidebar_navigation_item;
