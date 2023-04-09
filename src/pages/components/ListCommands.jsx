import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import Content from "../../Tools/Content";

function ListCommands() {
  const { item_version } = useParams();

  return (
    <>
      <Table striped size="sm" variant="dark" hover responsive>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Content().commands[item_version].map((command, index) => (
            <tr key={index}>
              <td>{command.command}</td>
              <td>{command.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListCommands;
