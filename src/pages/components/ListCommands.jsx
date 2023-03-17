import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import Content from "../../Tools/Content";

function ListCommands() {
  const { item_version } = useParams();

  return (
    <>
      <Table striped size="sm" variant="dark">
        <thead>
          <tr>
            <th>Description</th>
            <th>Command</th>
          </tr>
        </thead>
        <tbody>
          {Content().commands[item_version].map((command, index) => (
            <tr key={index}>
              <td>{command.description}</td>
              <td>{command.command}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListCommands;
