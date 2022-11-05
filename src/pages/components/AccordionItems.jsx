import { Accordion } from "react-bootstrap";

function AccordionItems(props) {
  return (
    <Accordion defaultActiveKey={0}>
      {props.items.map((item, index) => {
        return (
          <Accordion.Item
            eventKey={index}
            key={index}
            className="bg-black-blue"
            style={{
              border: "none",
            }}
          >
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default AccordionItems;
