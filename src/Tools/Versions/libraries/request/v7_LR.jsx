import { Fragment } from "react";
import CodeBlock from "../../../../pages/components/CodeBlock";
import Title from "../../../../pages/components/Title";
import { Alert } from "react-bootstrap";
import Description from "../../../../pages/components/Description";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import SupportVersion from "../../../../pages/components/SupportVersion";

export default function v7_LR() {
  return {
    "getting-started": {
      name: "Getting started",
      type: "sub_modules",
      list: {
        "about-as": {
          name: "About us",
          code: (
            <Fragment>
              <Title title={"About us"} />

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <Description
                description={
                  "Library created to request input data and response requests."
                }
              />
            </Fragment>
          ),
        },
        install: {
          name: "Install",
          code: (
            <Fragment>
              <Title title={"Install"} />

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <SupportVersion title={"Lion-Request"} version={"8.4"} />

              <CodeBlock
                language={"bash"}
                content={"composer require lion/request"}
              />
            </Fragment>
          ),
        },
      },
    },
    http: {
      name: "Http::class",
      type: "sub_modules",
      list: {
        constants: {
          name: "Constants",
          code: (
            <Fragment>
              <LibraryTitle className={"Http"} methodName={"const"} />

              <Description
                description={
                  "The Http class contains only constants for its HTTP protocols and HTTP status codes."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

/**
 * [The HTTP 100 Continue informational status response code indicates that
 * everything so far is OK and that the client should continue with the
 * request or ignore it if it is already finished]
 *
 * @const CONTINUE
 */
public const int CONTINUE = 100;

/**
 * [The HTTP 101 Switching Protocols informational status code is sent in
 * response to an Upgrade request header from the client, and indicates the
 * protocol the server is switching to]
 *
 * @const SWITCHING_PROTOCOLS
 */
public const int SWITCHING_PROTOCOLS = 101;

/**
 * [The HTTP 102 Processing status code is an interim response used to
 * inform the client that the server has accepted the complete request, but
 * has not yet completed it]
 *
 * @const PROCESSING
 */
public const int PROCESSING = 102;

/**
 * [The HTTP 103 Early Hints status code is primarily intended to be used
 * with the Link header, letting the user agent start preloading resources
 * while the server prepares a response]
 *
 * @const EARLY_HINTS
 */
public const int EARLY_HINTS = 103;

/**
 * [The HTTP 200 OK success status response code indicates that the request
 * has succeeded A 200 response is cacheable by default]
 *
 * @const OK
 */
public const int OK = 200;

/**
 * [The HTTP 201 Created success status response code indicates that the
 * request has succeeded and a new resource has been created as a result]
 *
 * @const CREATED
 */
public const int CREATED = 201;

/**
 * [The HTTP 202 Accepted status code indicates that the request has been
 * received but not yet acted upon]
 *
 * @const ACCEPTED
 */
public const int ACCEPTED = 202;

/**
 * [The HTTP 203 Non-Authoritative Information response status code
 * indicates that the request was successful but the enclosed payload has
 * been modified from that of the origin server's 200 OK response by a
 * transforming proxy]
 *
 * @const NON_AUTHORITATIVE_INFORMATION
 */
public const int NON_AUTHORITATIVE_INFORMATION = 203;

/**
 * [The HTTP 204 No Content success status response code indicates that a
 * request has succeeded, but that the client doesn't need to navigate away
 * from its current page]
 *
 * @const NO_CONTENT
 */
public const int NO_CONTENT = 204;

/**
 * [The HTTP 205 Reset Content status code indicates that the server has
 * fulfilled the request and desires that the client resets the document
 * view, which caused the request to be sent, to its original state as
 * received from the origin server]
 *
 * @const RESET_CONTENT
 */
public const int RESET_CONTENT = 205;

/**
 * [The HTTP 206 Partial Content success status response code indicates that
 * the request has succeeded and has the body content of the range requested
 * by the client]
 *
 * @const PARTIAL_CONTENT
 */
public const int PARTIAL_CONTENT = 206;

/**
 * [The HTTP 207 Multi-Status status code provides status for multiple
 * independent operations]
 *
 * @const MULTI_STATUS
 */
public const int MULTI_STATUS = 207;

/**
 * [The HTTP 208 Already Reported status code is used inside a
 * <dav:propstat> response element to avoid enumerating the internal members
 * of multiple bindings to the same collection repeatedly]
 *
 * @const ALREADY_REPORTED
 */
public const int ALREADY_REPORTED = 208;

/**
 * [The HTTP 226 IM Used success status code indicates that the server has
 * fulfilled a request for the resource, and the response is a
 * representation of the result of one or more instance-manipulations
 * applied to the current instance]
 *
 * @const IM_USED
 */
public const int IM_USED = 226;

/**
 * [The HTTP 300 Multiple Choices redirect status response code indicates
 * that the request has more than one possible response The user-agent or
 * user should choose one of them]
 *
 * @const MULTIPLE_CHOICES
 */
public const int MULTIPLE_CHOICES = 300;

/**
 * [The HTTP 301 Moved Permanently redirect status response code indicates
 * that the resource requested has been definitively moved to the URL given
 * by the Location headers]
 *
 * @const MOVED_PERMANENTLY
 */
public const int MOVED_PERMANENTLY = 301;

/**
 * [The HTTP 302 Found redirect status response code indicates that the
 * resource requested has been temporarily moved to the URL given by the
 * Location header]
 *
 * @const FOUND
 */
public const int FOUND = 302;

/**
 * [The HTTP 303 See Other redirect status response code indicates that the
 * redirects don't link to the newly uploaded resources but to another page]
 *
 * @const SEE_OTHER
 */
public const int SEE_OTHER = 303;

/**
 * [The HTTP 304 Not Modified client redirection response code indicates
 * that there is no need to retransmit the requested resources]
 *
 * @const NOT_MODIFIED
 */
public const int NOT_MODIFIED = 304;

/**
 * [The HTTP 305 Use Proxy response status code indicates that the requested
 * response must be accessed by a proxy]
 *
 * @const USE_PROXY
 */
public const int USE_PROXY = 305;

/**
 * [This response code is no longer used; it is just reserved It was used in
 * a previous version of the HTTP/11 specification]
 *
 * @const UNUSED
 */
public const int UNUSED = 306;

/**
 * [The HTTP 307 Temporary Redirect redirect status response code indicates
 * that the resource requested has been temporarily moved to the URL given
 * by the Location headers]
 *
 * @const TEMPORARY_REDIRECT
 */
public const int TEMPORARY_REDIRECT = 307;

/**
 * [The HTTP 308 Permanent Redirect redirect status response code indicates
 * that the resource requested has been definitively moved to the URL given
 * by the Location headers]
 *
 * @const PERMANENT_REDIRECT
 */
public const int PERMANENT_REDIRECT = 308;

/**
 * [The HTTP 400 Bad Request response status code indicates that the server
 * cannot or will not process the request due to something that is perceived
 * to be a client error]
 *
 * @const BAD_REQUEST
 */
public const int BAD_REQUEST = 400;

/**
 * [The HTTP 401 Unauthorized response status code indicates that the
 * request has not been applied because it lacks valid authentication
 * credentials for the target resource]
 *
 * @const UNAUTHORIZED
 */
public const int UNAUTHORIZED = 401;

/**
 * [The HTTP 402 Payment Required response status code is reserved for
 * future use This status code is primarily intended for use in digital
 * payment systems]
 *
 * @const PAYMENT_REQUIRED
 */
public const int PAYMENT_REQUIRED = 402;

/**
 * [The HTTP 403 Forbidden client error status response code indicates that
 * the server understood the request but refuses to authorize it]
 *
 * @const FORBIDDEN
 */
public const int FORBIDDEN = 403;

/**
 * [The HTTP 404 Not Found response status code indicates that the server
 * cannot find the requested resource]
 *
 * @const NOT_FOUND
 */
public const int NOT_FOUND = 404;

/**
 * [The HTTP 405 Method Not Allowed response status code indicates that the
 * request method is known by the server but is not supported by the target
 * resource]
 *
 * @const METHOD_NOT_ALLOWED
 */
public const int METHOD_NOT_ALLOWED = 405;

/**
 * [The HTTP 406 Not Acceptable response status code indicates that the
 * server cannot produce a response matching the list of acceptable values
 * defined in the request's proactive content negotiation headers]
 *
 * @const NOT_ACCEPTABLE
 */
public const int NOT_ACCEPTABLE = 406;

/**
 * [The HTTP 407 Proxy Authentication Required status code is similar to 401
 * Unauthorized, but it indicates that the client needs to authenticate
 * itself in order to use a proxy]
 *
 * @const PROXY_AUTHENTICATION_REQUIRED
 */
public const int PROXY_AUTHENTICATION_REQUIRED = 407;

/**
 * [The HTTP 408 Request Timeout response status code means that the server
 * would like to shut down this unused connection]
 *
 * @const REQUEST_TIMEOUT
 */
public const int REQUEST_TIMEOUT = 408;

/**
 * [The HTTP 409 Conflict response status code indicates a request conflict
 * with the current state of the target resource]
 *
 * @const CONFLICT
 */
public const int CONFLICT = 409;

/**
 * [The HTTP 410 Gone response status code indicates that the target
 * resource is no longer available at the origin server and that this
 * condition is likely to be permanent]
 *
 * @const GONE
 */
public const int GONE = 410;

/**
 * [The HTTP 411 Length Required client error response code indicates that
 * the server refuses to accept the request without a defined Content-Length
 * header]
 *
 * @const LENGTH_REQUIRED
 */
public const int LENGTH_REQUIRED = 411;

/**
 * [The HTTP 412 Precondition Failed client error response code indicates
 * that access to the target resource has been denied]
 *
 * @const PRECONDITION_FAILED
 */
public const int PRECONDITION_FAILED = 412;

/**
 * [The HTTP 413 Payload Too Large response status code indicates that the
 * request entity is larger than limits defined by the server]
 *
 * @const PAYLOAD_TOO_LARGE
 */
public const int PAYLOAD_TOO_LARGE = 413;

/**
 * [The HTTP 414 URI Too Long response status code indicates that the URI
 * requested by the client is longer than the server is willing to
 * interpret]
 *
 * @const URI_TOO_LONG
 */
public const int URI_TOO_LONG = 414;

/**
 * [The HTTP 415 Unsupported Media Type response status code indicates that
 * the server refuses to accept the request because the payload format is in
 * an unsupported format]
 *
 * @const UNSUPPORTED_MEDIA_TYPE
 */
public const int UNSUPPORTED_MEDIA_TYPE = 415;

/**
 * [The HTTP 416 Range Not Satisfiable response status code indicates that
 * none of the ranges in the Range header field overlap the current extent
 * of the selected resource]
 *
 * @const RANGE_NOT_SATISFIABLE
 */
public const int RANGE_NOT_SATISFIABLE = 416;

/**
 * [The HTTP 417 Expectation Failed response status code indicates that the
 * expectation given in the request's Expect header could not be met by at
 * least one of the inbound servers]
 *
 * @const EXPECTATION_FAILED
 */
public const int EXPECTATION_FAILED = 417;

/**
 * [The HTTP 418 I'm a teapot client error response code indicates that the
 * server refuses to brew coffee because it is a teapot]
 *
 * @const IM_A_TEAPOT
 */
public const int IM_A_TEAPOT = 418;

/**
 * [The HTTP 421 Misdirected Request status code indicates that the request
 * was directed at a server that is not able to produce a response]
 *
 * @const MISDIRECTED_REQUEST
 */
public const int MISDIRECTED_REQUEST = 421;

/**
 * [The HTTP 422 Unprocessable Entity response status code means the server
 * understands the content type of the request entity, and the syntax of the
 * request entity is correct, but it was unable to process the contained
 * instructions]
 *
 * @const UNPROCESSABLE_ENTITY
 */
public const int UNPROCESSABLE_ENTITY = 422;

/**
 * [The HTTP 423 Locked status code means the resource that is being
 * accessed is locked]
 *
 * @const LOCKED
 */
public const int LOCKED = 423;

/**
 * [The HTTP 424 Failed Dependency status code means that the request failed
 * because it depended on another request and that request failed]
 *
 * @const FAILED_DEPENDENCY
 */
public const int FAILED_DEPENDENCY = 424;

/**
 * [The HTTP 425 Too Early status code indicates that the server is
 * unwilling to risk processing a request that might be replayed]
 *
 * @const TOO_EARLY
 */
public const int TOO_EARLY = 425;

/**
 * [The HTTP 426 Upgrade Required response code indicates that the server
 * refuses to perform the request using the current protocol but might be
 * willing to do so after the client upgrades to a different protocol]
 *
 * @const UPGRADE_REQUIRED
 */
public const int UPGRADE_REQUIRED = 426;

/**
 * [The HTTP 428 Precondition Required status code indicates that the origin
 * server requires the request to be conditional]
 *
 * @const PRECONDITION_REQUIRED
 */
public const int PRECONDITION_REQUIRED = 428;

/**
 * [The HTTP 429 Too Many Requests response status code indicates that the
 * user has sent too many requests in a given amount of time
 * ("rate limiting")]
 *
 * @const TOO_MANY_REQUESTS
 */
public const int TOO_MANY_REQUESTS = 429;

/**
 * [The HTTP 431 Request Header Fields Too Large response status code
 * indicates that the server is unwilling to process the request because its
 * header fields are too large]
 *
 * @const REQUEST_HEADER_FIELDS_TOO_LARGE
 */
public const int REQUEST_HEADER_FIELDS_TOO_LARGE = 431;

/**
 * [The HTTP 451 Unavailable For Legal Reasons client error response code
 * indicates that the user requested a resource that is not available due to
 * legal reasons]
 *
 * @const UNAVAILABLE_FOR_LEGAL_REASONS
 */
public const int UNAVAILABLE_FOR_LEGAL_REASONS = 451;

/**
 * [The HTTP 499 Client Closed Request response status code is used when the
 * client closes the connection before the server answers the request]
 *
 * @const CLIENT_CLOSED_REQUEST
 */
public const int CLIENT_CLOSED_REQUEST = 499;

/**
 * [The HTTP 500 Internal Server Error response status code indicates that
 * the server encountered an unexpected condition that prevented it from
 * fulfilling the request]
 *
 * @public const INTERNAL_SERVER_ERROR
 */
public const int INTERNAL_SERVER_ERROR = 500;

/**
 * [The HTTP 501 Not Implemented server error response code means that the
 * server does not support the functionality required to fulfill the
 * request]
 *
 * @const NOT_IMPLEMENTED
 */
public const int NOT_IMPLEMENTED = 501;

/**
 * [The HTTP 502 Bad Gateway server error response code indicates that the
 * server, while acting as a gateway or proxy, received an invalid response
 * from the inbound server it accessed while attempting to fulfill the
 * request]
 *
 * @const BAD_GATEWAY
 */
public const int BAD_GATEWAY = 502;

/**
 * [The HTTP 503 Service Unavailable server error response code indicates
 * that the server is not ready to handle the request]
 *
 * @const SERVICE_UNAVAILABLE
 */
public const int SERVICE_UNAVAILABLE = 503;

/**
 * [The HTTP 504 Gateway Timeout server error response code indicates that
 * the server, while acting as a gateway or proxy, did not get a response in
 * time from the upstream server that it needed in order to complete the
 * request]
 *
 * @const GATEWAY_TIMEOUT
 */
public const int GATEWAY_TIMEOUT = 504;

/**
 * [The HTTP 505 HTTP Version Not Supported server error response code
 * indicates that the server does not support the HTTP protocol version used
 * in the request]
 *
 * @const VERSION_NOT_SUPPORTED
 */
public const int VERSION_NOT_SUPPORTED = 505;

/**
 * [The HTTP 506 Variant Also Negotiates server error response code
 * indicates that the server has an internal configuration error: the chosen
 * variant resource is configured to engage in transparent content
 * negotiation itself, and is therefore not a proper end point in the
 * negotiation process]
 *
 * @const VARIANT_ALSO_NEGOTIATES
 */
public const int VARIANT_ALSO_NEGOTIATES = 506;

/**
 * [The HTTP 507 Insufficient Storage server error response code indicates
 * that the server is unable to store the representation needed to complete
 * the request]
 *
 * @const INSUFFICIENT_STORAGE
 */
public const int INSUFFICIENT_STORAGE = 507;

/**
 * [The HTTP 508 Loop Detected status code indicates that the server
 * terminated an operation because it encountered an infinite loop while
 * processing a request with "Depth: infinity"]
 *
 * @const LOOP_DETECTED
 */
public const int LOOP_DETECTED = 508;

/**
 * [The HTTP 510 Not Extended server error response code indicates that
 * further extensions to the request are required for the server to fulfill
 * it]
 *
 * @const NOT_EXTENDED
 */
public const int NOT_EXTENDED = 510;

/**
 * [The HTTP 511 Network Authentication Required server error response code
 * indicates that the client needs to authenticate to gain network access]
 *
 * @const NETWORK_AUTHENTICATION_REQUIRED
 */
public const int NETWORK_AUTHENTICATION_REQUIRED = 511;

/**
 * [The HTTP 599 Network Connect Timeout Error status code is used to
 * indicate network connection timeout beyond the control of the client or
 * server]
 *
 * @const NETWORK_CONNECT_TIMEOUT_ERROR
 */
public const int NETWORK_CONNECT_TIMEOUT_ERROR = 599;

/**
 * [The GET method requests a representation of the specified resource
 * Requests using GET should only retrieve data]
 *
 * @const GET
 */
public const string GET = 'GET';

/**
 * [The HEAD method asks for a response identical to a GET request, but
 * without the response body]
 *
 * @const HEAD
 */
public const string HEAD = 'HEAD';

/**
 * [The POST method submits an entity to the specified resource, often
 * causing a change in state or side effects on the server]
 *
 * @const POST
 */
public const string POST = 'POST';

/**
 * [The PUT method replaces all current representations of the target
 * resource with the request payload]
 *
 * @const PUT
 */
public const string PUT = 'PUT';

/**
 * [The DELETE method deletes the specified resource]
 *
 * @const DELETE
 */
public const string DELETE = 'DELETE';

/**
 * [The CONNECT method establishes a tunnel to the server identified by the
 * target resource]
 *
 * @const CONNECT
 */
public const string CONNECT = 'CONNECT';

/**
 * [The OPTIONS method describes the communication options for the target
 * resource]
 *
 * @const OPTIONS
 */
public const string OPTIONS = 'OPTIONS';

/**
 * [The TRACE method performs a message loop-back test along the path to the
 * target resource]
 *
 * @const TRACE
 */
public const string TRACE = 'TRACE';

/**
 * [The PATCH method applies partial modifications to a resource]
 *
 * @const PATCH
 */
public const string PATCH = 'PATCH';
`}
              />
            </Fragment>
          ),
        },
      },
    },
    request: {
      name: "Request::class",
      type: "sub_modules",
      list: {
        capture: {
          name: "capture",
          code: (
            <Fragment>
              <LibraryTitle className={"Request"} methodName={"capture"} />

              <Description
                description={
                  "The capture function gets the data sent through an http request."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Request\\Request;

$data = (new Request())->capure();

var_dump($data);
`}
              />
            </Fragment>
          ),
        },
        header: {
          name: "header",
          code: (
            <Fragment>
              <LibraryTitle className={"Request"} methodName={"header"} />

              <Description
                description={
                  "The header function allows you to create headers."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Request\\Request;

Request::header('Access-Control-Allow-Origin', '*');

Request::header('Content-Type', 'application/json; charset=UTF-8');
`}
              />
            </Fragment>
          ),
        },
      },
    },
    response: {
      name: "Response::class",
      type: "sub_modules",
      list: {
        error: {
          name: "error",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"error"} />

              <Description
                description={
                  "The error function returns a response of type error, along with its message and additional optional data."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Request\\Response;

$response = (new Response())
    ->error('hello world');

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        finish: {
          name: "finish",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"finish"} />

              <Description
                description={
                  "The finish function ends the execution of all processes up to the point of execution of the same function, displaying a json of the content obtained on the screen."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Request\\Response;

$response = new Response();

$response
    ->finish($response->success('hello world'));
`}
              />
            </Fragment>
          ),
        },
        info: {
          name: "info",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"info"} />

              <Description
                description={
                  "The info function returns a response of type info, along with its message and additional optional data."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Request\\Response;

$response = (new Response())
    ->info('hello world');

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        response: {
          name: "response",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"response"} />

              <Description
                description={
                  "The response function returns an object of any response type, along with its message and additional optional data."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Request\\Response;
use Lion\\Request\\Status;

$response = (new Response())
    ->response(Status::SUCCESS, 'hello world');

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        success: {
          name: "success",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"success"} />

              <Description
                description={
                  "The success function returns a response of type success, along with its message and additional optional data."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Request\\Response;

$response = (new Response())
    ->success('hello world');

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        warning: {
          name: "warning",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"warning"} />

              <Description
                description={
                  "The warning function returns a response of type warning, along with its message and additional optional data."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Request\\Response;

$response = (new Response())
    ->warning('hello world');

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    status: {
      name: "Status::class",
      type: "sub_modules",
      list: {
        constants: {
          name: "Constants",
          code: (
            <Fragment>
              <LibraryTitle className={"Status"} methodName={"const"} />

              <Description
                description={
                  "The Status class contains only constants for its response states."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php
                
/**
 * [Represents a correct response object]
 *
 * @const SUCCESS
 */
public const string SUCCESS = 'success';

/**
 * [Represents an error response object]
 *
 * @const ERROR
 */
public const string ERROR = 'error';

/**
 * [Represents a warning response object]
 *
 * @const WARNING
 */
public const string WARNING = 'warning';

/**
 * [Represents an information response object]
 *
 * @const INFO
 */
public const string INFO = 'info';

/**
 * [Represents a database error response object]
 *
 * @const DATABASE_ERROR
 */
public const string DATABASE_ERROR = 'database-error';

/**
 * [Represents a sesion error response object]
 *
 * @const DATABASE_ERROR
 */
public const string SESSION_ERROR = 'session-error';

/**
 * [Represents a route error response object]
 *
 * @const DATABASE_ERROR
 */
public const string ROUTE_ERROR = 'route-error';

/**
 * [Represents a file error response object]
 *
 * @const DATABASE_ERROR
 */
public const string FILE_ERROR = 'file-error';

/**
 * [Represents a mail error response object]
 *
 * @const DATABASE_ERROR
 */
public const string MAIL_ERROR = 'mail-error';

/**
 * [Represents a rules error response object]
 *
 * @const RULE_ERROR
 */
public const string RULE_ERROR = 'rule-error';
`}
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
