import { Fragment, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

import Content from "../../Tools/Content";

function ListCommandsNew() {
  const navigate = useNavigate();
  const { item_version } = useParams();

  const scroolPage = () => {
    const url = window.location.href;
    const hashIndex = url.indexOf("#");

    if (hashIndex !== -1) {
      const elementId = url.substring(hashIndex + 1);
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  useEffect(() => {
    scroolPage();
  }, []);

  return (
    <div className="mb-3">
      <div className="mb-3">
        <>
          <h6>{"argument"}</h6>

          <i className={"bi bi-arrow-right-short me-0 text-info"}>{"arg"}</i>
        </>

        <>
          <h6>{"options"}</h6>

          <i className={"bi bi-arrow-right-short me-0 text-success"}>
            {"--option"}
          </i>

          <i className={"bi bi-arrow-right-short me-0 text-success"}>{"-o"}</i>
        </>
      </div>

      <hr />

      {Content().framework[item_version].commands.map((item, index) => (
        <Table
          size="sm"
          variant="dark"
          responsive
          hover
          key={index}
          className="align-middle"
        >
          <thead>
            <tr>
              <th className="text-warning" colSpan={2}>
                {item.group}
              </th>
            </tr>
          </thead>
          <tbody>
            {item.childs.map((child, childIndex) => (
              <Fragment key={childIndex}>
                <tr
                  id={child.name.replace(/ /gm, "-").replace(/:/gm, "-")}
                  onClick={() => {
                    navigate(
                      `#${child.name.replace(/ /gm, "-").replace(/:/gm, "-")}`
                    );
                    scroolPage();
                  }}
                >
                  <td
                    role="button"
                    onClick={() => navigator.clipboard.writeText(child.name)}
                  >
                    {child.name}
                  </td>

                  <td>{child.desc}</td>
                </tr>

                <tr>
                  <td colSpan={2} className="p-0">
                    <Table size="sm" variant="dark" responsive className="m-0">
                      <tbody>
                        {child.args.map((arg, indexArgs) => (
                          <tr key={indexArgs}>
                            <td className="ps-2">
                              <label
                                className={
                                  !arg.arg ? "text-success" : "text-info"
                                }
                              >
                                <i
                                  className={
                                    "bi bi-arrow-right-short me-0 " +
                                    (!arg.arg ? "text-success" : "text-info")
                                  }
                                ></i>
                                {arg.name}
                              </label>
                            </td>

                            <td className="text-center">{arg.desc}</td>

                            <td
                              className={
                                "text-center " +
                                (!arg.arg ? "text-success" : "text-info")
                              }
                            >
                              {arg.optional === false ? "REQUIRED" : "OPTIONAL"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </Table>
      ))}
    </div>
  );
}

export default ListCommandsNew;
