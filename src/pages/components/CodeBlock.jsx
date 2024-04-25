import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  darcula,
  androidstudio,
  stackoverflowDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdContentCopy, MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";

function CodeBlock({ language, content }) {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopy(false), 2000);
  }, [copy]);

  return (
    <div className="parentDiv">
      <CopyToClipboard
        className="copyButton"
        text={content}
        onCopy={() => setCopy(true)}
      >
        {!copy ? <MdContentCopy /> : <MdCheck className="text-success" />}
      </CopyToClipboard>

      <SyntaxHighlighter
        customStyle={{ fontSize: 12, position: "relative" }}
        language={language}
        style={darcula}
        className="rounded p-3"
        showLineNumbers={["bash"].includes(language) ? false : true}
        wrapLines
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
