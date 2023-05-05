import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  darcula,
  androidstudio,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdContentCopy, MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";

function CodeBlock({ language, content }) {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopy(false), 3500);
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
        customStyle={{ fontSize: 14, position: "relative" }}
        language={language}
        style={androidstudio}
        className="rounded p-3"
        showLineNumbers
        wrapLines
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
