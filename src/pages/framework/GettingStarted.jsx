import CodeBlock from "../components/CodeBlock";

function GettingStarted() {
  return (
    <>
      <div className="mb-4">
        <h1 className="pb-2">Lion-Framework</h1>

        <p>
          Lion-Framework can also serve as an API backend for a JavaScript
          single page application or a mobile application. For example, you can
          use Lion-Framework as an API backend for your Vite.js app or Kotlin
          app.
        </p>

        <p>
          You can use Lion-Framework to provide authentication and data
          storage/retrieval for your application, while taking advantage of
          Lion-Framework services such as emails, databases and more.
        </p>
      </div>

      <hr />

      <div className="mb-3">
        <h4 className="pb-2">INSTALL</h4>

        <CodeBlock
          language={'powershell'}
          content={'composer create-project lion-framework/lion-framework'}
        />
      </div>

      <hr />

      <div className="mb-3">
        <h4 className="pb-2">USAGE</h4>

        <p>
          Start by running the server, by default it runs on port 8000.
        </p>

        <CodeBlock
          language={'powershell'}
          content={'php lion serve'}
        />

        <p>
          use another port.
        </p>

        <CodeBlock
          language={'powershell'}
          content={'php lion serve --port 8001'}
        />
      </div>
    </>
  );
}

export default GettingStarted;
