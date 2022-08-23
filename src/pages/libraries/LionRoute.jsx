import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ListTabs from "../components/ListTabs";

function LionRoute() {
    const [items, setItems] = useState([{
        event: 'getting-started',
        name: 'Getting started'
    }]);

    const [panes, setPanes] = useState([{
        event: 'getting-started',
        content: (
            <>
                Hola
            </>
        )
    }]);

    return <ListTabs default="getting-started" items={items} panes={panes} />;
}

export default LionRoute;