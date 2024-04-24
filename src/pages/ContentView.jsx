import { useParams } from "react-router-dom";
import Content from "../Tools/Content";

export default function ContentView() {
  const { item_version, tab, code } = useParams();

  return Content().framework[item_version].docs[tab].list[code].code;
}
