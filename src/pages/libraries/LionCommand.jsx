import { useState } from "react";
import ListTabs from "../components/ListTabs";
import LionCommandMD from "./md/LionCommand";

function LionCommand() {
  const [items, setItems] = useState([
    {
      event: "getting-started",
      name: "Getting started"
    }
  ]);

  const [panes, setPanes] = useState([
    {
      event: "getting-started",
      content: ''
    }
  ]);

  return <ListTabs default="getting-started" items={items} panes={panes} />
}

export default LionCommand;
