import CodeBlock from "./CodeBlock";

export default function Example({ number, language, content }) {
  return (
    <div className="mb-3">
      <h5 className="text-warning mb-3">Example #{number}</h5>

      <CodeBlock language={language} content={content} />
    </div>
  );
}
