import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className="rounded-lg p-3"
        style={{ color: match ? "white" : "#221638", backgroundColor: match ? "#FE4A55" : "white", }}
        to={to}
        {...props}
      >
        {children}
      </Link>

    </div>
  );
}
export default CustomLink;