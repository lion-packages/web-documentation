import { useLocation, useParams } from "react-router-dom";
import Content from "../../Tools/Content";

function AddCode() {
  const location = useLocation();
  const library = location.pathname.split("/").filter((route) => route != "");
  const { version, classname, functionname } = useParams();

  return Content().libraries.lion[library[2]].class[version][classname].methods[
    functionname
  ].code;
}

export default AddCode;
