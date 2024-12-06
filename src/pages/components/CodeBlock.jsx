import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdContentCopy, MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CodeBlock({ language, content }) {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopy(false), 2000);
  }, [copy]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.3,
        ease: [0, 0.6, 0.2, 1],
      }}
      className="parentDiv"
    >
      <CopyToClipboard
        className="copyButton"
        text={content}
        onCopy={() => setCopy(true)}
      >
        {!copy ? (
          <MdContentCopy role="button" />
        ) : (
          <MdCheck className="text-success" role="button" />
        )}
      </CopyToClipboard>

      <SyntaxHighlighter
        customStyle={{ fontSize: 12, position: "relative" }}
        language={language}
        style={darcula}
        className="rounded p-3"
        showLineNumbers={!["bash"].includes(language)}
        wrapLines
      >
        {content}
      </SyntaxHighlighter>
    </motion.div>
  );
}

export default CodeBlock;
