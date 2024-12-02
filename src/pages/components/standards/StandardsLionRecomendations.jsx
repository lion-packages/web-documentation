import { Link } from "react-router-dom";
import CodeBlock from "../CodeBlock";

export default function StandardsLionRecomendations() {
  return (
    <div className="mb-3">
      <h5 className="mb-3">Lion-Packages</h5>

      <p>
        The "Lion-Packages" organization has established a standard for creating
        response objects in PHP to ensure consistent and clear HTTP responses
        throughout our application. This standard defines specific methods for
        generating different types of response objects, each tailored to a
        particular kind of response.
      </p>

      <p>The standard consists of the following methods:</p>

      <ul>
        <li>
          <strong>Response Method: </strong>method allows you to generate a
          custom response object. This method accepts parameters for the status,
          message, HTTP status code, and any additional data. It provides
          flexibility to create response objects that fit specific needs.
        </li>

        <li>
          <strong>Success Method: </strong>The{" "}
          <code className="text-light">success</code> method generates a
          response object indicating a successful operation. It takes optional
          parameters for a message, HTTP status code, and additional data. By
          default, it sets the HTTP status code to 200 (OK).
        </li>

        <li>
          <strong>Error Method: </strong>The{" "}
          <code className="text-light">error</code> method creates a response
          object representing an error condition. It accepts parameters for a
          message, HTTP status code, and additional data. The default HTTP
          status code is 500 (Internal Server Error).
        </li>

        <li>
          <strong>Warning Method: </strong>The{" "}
          <code className="text-light">warning</code> method generates a
          response object to indicate a warning. This method allows for a
          message, HTTP status code, and additional data to be provided. The
          default HTTP status code is 200 (OK).
        </li>

        <li>
          <strong>Info Method: </strong>The{" "}
          <code className="text-light">info</code> method creates a response
          object to convey informational messages. It takes parameters for a
          message, HTTP status code, and additional data, with a default HTTP
          status code of 200 (OK).
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

declare(strict_types=1);

use Lion\\Request\\Status;
use Lion\\Request\\Http;
use stdClass;

/**
 * This is an example of a response object
 *
 * @return stdClass
 */
public function example(): stdClass
{
    return response(Status::SUCCESS, 'OK', Http::OK);
}
`}
      />

      <CodeBlock
        language="php"
        content={`<?php

declare(strict_types=1);

use Lion\\Request\\Http;
use stdClass;

/**
 * This is an example of a response object
 *
 * @return stdClass
 */
public function example(): stdClass
{
    return success('OK', Http::OK);
}
`}
      />

      <p>
        When specifying the response code, the method will also update the HTTP
        response code accordingly, ensuring that the response object and HTTP
        status code are in sync. For more information about HTTP response
        statuses and codes, you can visit the following link:{" "}
        <Link to={"/docs/library/content"} className="text-decoration-none">
          Lion-Request
        </Link>
      </p>
    </div>
  );
}
