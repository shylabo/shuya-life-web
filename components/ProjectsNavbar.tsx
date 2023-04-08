import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  return (
    <li
      className={
        (active === value ? "text-blue-600 " : "") +
        "capitalize cursor-pointer hover:text-blue-500"
      }
      onClick={() => handlerFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="go" {...props} />
      <NavItem value="typescript" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="vue" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
