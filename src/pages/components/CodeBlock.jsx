import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock({ language, content }) {
  return (
    <SyntaxHighlighter
      customStyle={{ fontSize: 15 }}
      language={language}
      style={darcula}
      className="rounded p-3"
      children={content}
    />
  );
}

export default CodeBlock;
