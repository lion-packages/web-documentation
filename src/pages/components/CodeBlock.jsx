import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock(props) {
  return <SyntaxHighlighter
    language={props.language}
    style={darcula}
    className="rounded p-3"
    children={props.content}
  />
}

export default CodeBlock;
