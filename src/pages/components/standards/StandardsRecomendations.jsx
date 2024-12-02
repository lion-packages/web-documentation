export default function StandardsRecomendations() {
  return (
    <div className="mb-3">
      <h5 className="mb-3">PHP FIG: PHP Standards Recommendations</h5>

      <p>
        The PSR (PHP Standards Recommendations) are a series of recommendations
        and standards proposed by the PHP-FIG (PHP Framework Interoperability
        Group) to promote interoperability between PHP frameworks and
        components. These standards cover various areas of application
        development in PHP, including code structuring, coding practices, class
        autoloading, component interfaces, among others.
      </p>

      <p>
        The main goal of the PSR is to establish a set of common standards that
        facilitate the integration and reuse of code across different PHP
        projects and frameworks. Some of the most well-known and widely used
        PSRs include:
      </p>

      <ul>
        <li>
          <strong>PSR-1:</strong> Basic coding standards, which define the
          minimum requirements to ensure standardized PHP code.
        </li>

        <li>
          <strong>PSR-2:</strong> Coding style guide, which expands the basic
          standards of PSR-1 with more details on code formatting.
        </li>

        <li>
          <strong>PSR-3:</strong> Logging interface, which provides a common
          interface for logging libraries.
        </li>

        <li>
          <strong>PSR-4:</strong> Autoloading specification, which describes a
          standardized way to load class files.
        </li>

        <li>
          <strong>PSR-7:</strong> HTTP message interface, which defines the
          interfaces for HTTP requests and responses, allowing better management
          of HTTP messages in applications.
        </li>
      </ul>

      <p>
        These standards are not mandatory, but their adoption can significantly
        improve code quality and maintainability, as well as facilitate
        collaboration between developers working with different tools and
        frameworks.
      </p>

      <p>
        For more information on the accepted PSRs, you can visit the following
        link:{" "}
        <a
          href="https://www.php-fig.org/psr/"
          className="text-decoration-none"
          target="_blank"
        >
          PHP-FIG PSR
        </a>
      </p>
    </div>
  );
}
