import { Container } from "react-bootstrap";
import Title from "./components/Title";
import Description from "./components/Description";
import { Fragment } from "react";
import CodeBlock from "./components/CodeBlock";
import { Link } from "react-router-dom";

export default function Standars() {
  return (
    <Container>
      <div className="my-3 text-light">
        <div className="mb-5">
          <Title title="Contributing to Lion-Packages Open-Source PHP Projects" />

          <Description
            description={
              "We are going to tell you what kind of standards we have within the organization for your personal use or contribution."
            }
          />
        </div>

        <div className="mb-3">
          <h5 className="text-warning">
            PHP FIG: PHP Standards Recommendations
          </h5>

          <p>
            The PSR (PHP Standards Recommendations) are a series of
            recommendations and standards proposed by the PHP-FIG (PHP Framework
            Interoperability Group) to promote interoperability between PHP
            frameworks and components. These standards cover various areas of
            application development in PHP, including code structuring, coding
            practices, class autoloading, component interfaces, among others.
          </p>

          <p>
            The main goal of the PSR is to establish a set of common standards
            that facilitate the integration and reuse of code across different
            PHP projects and frameworks. Some of the most well-known and widely
            used PSRs include:
          </p>

          <ul>
            <li>
              <strong>PSR-1:</strong> Basic coding standards, which define the
              minimum requirements to ensure standardized PHP code.
            </li>

            <li>
              <strong>PSR-2:</strong> Coding style guide, which expands the
              basic standards of PSR-1 with more details on code formatting.
            </li>

            <li>
              <strong>PSR-3:</strong> Logging interface, which provides a common
              interface for logging libraries.
            </li>

            <li>
              <strong>PSR-4:</strong> Autoloading specification, which describes
              a standardized way to load class files.
            </li>

            <li>
              <strong>PSR-7:</strong> HTTP message interface, which defines the
              interfaces for HTTP requests and responses, allowing better
              management of HTTP messages in applications.
            </li>
          </ul>

          <p>
            These standards are not mandatory, but their adoption can
            significantly improve code quality and maintainability, as well as
            facilitate collaboration between developers working with different
            tools and frameworks.
          </p>

          <p>
            For more information on the accepted PSRs, you can visit the
            following link:{" "}
            <a
              href="https://www.php-fig.org/psr/"
              className="text-decoration-none"
              target="_blank"
            >
              PHP-FIG PSR
            </a>
          </p>
        </div>

        <div className="mb-3">
          <h5 className="text-warning">Lion-Packages</h5>

          <p>
            The "Lion-Packages" organization has established a standard for
            creating response objects in PHP to ensure consistent and clear HTTP
            responses throughout our application. This standard defines specific
            methods for generating different types of response objects, each
            tailored to a particular kind of response.
          </p>

          <p>The standard consists of the following methods:</p>

          <ul>
            <li>
              <strong>Response Method: </strong>method allows you to generate a
              custom response object. This method accepts parameters for the
              status, message, HTTP status code, and any additional data. It
              provides flexibility to create response objects that fit specific
              needs.
            </li>

            <li>
              <strong>Success Method: </strong>The <code>success</code> method
              generates a response object indicating a successful operation. It
              takes optional parameters for a message, HTTP status code, and
              additional data. By default, it sets the HTTP status code to 200
              (OK).
            </li>

            <li>
              <strong>Error Method: </strong>The <code>error</code> method
              creates a response object representing an error condition. It
              accepts parameters for a message, HTTP status code, and additional
              data. The default HTTP status code is 500 (Internal Server Error).
            </li>

            <li>
              <strong>Warning Method: </strong>The <code>warning</code> method
              generates a response object to indicate a warning. This method
              allows for a message, HTTP status code, and additional data to be
              provided. The default HTTP status code is 200 (OK).
            </li>

            <li>
              <strong>Info Method: </strong>The <code>info</code> method creates
              a response object to convey informational messages. It takes
              parameters for a message, HTTP status code, and additional data,
              with a default HTTP status code of 200 (OK).
            </li>
          </ul>

          <p>
            In practice, these methods are used within controllers to generate
            response objects consistently. For example, to return a successful
            response, you would use:
          </p>

          <CodeBlock
            language="php"
            content={`<?php

use Lion\\Request\\Status;
use Lion\\Request\\Http;

/**
 * This is an example of a response object.
 *
 * @return object
 */
public function example(): object
{
    return response(Status::SUCCESS, 'OK', Http::HTTP_OK);
}
`}
          />

          <CodeBlock
            language="php"
            content={`<?php

use Lion\\Request\\Http;

/**
 * This is an example of a response object.
 *
 * @return object
 */
public function example(): object
{
    return success('OK', Http::HTTP_OK);
}
`}
          />

          <p>
            When specifying the response code, the method will also update the
            HTTP response code accordingly, ensuring that the response object
            and HTTP status code are in sync. For more information about HTTP
            response statuses and codes, you can visit the following link:{" "}
            <Link to={"/docs/library/content"} className="text-decoration-none">
              Lion-Request
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
