import { useParams } from "react-router-dom";
import Content from "../Tools/Content";

export default function ContentView() {
  const { item_version, tab, code, library = null } = useParams();

  return library === null
    ? Content().framework[item_version].docs[tab].list[code].code
    : Content().library[library][item_version][tab].list[code].code;
}
