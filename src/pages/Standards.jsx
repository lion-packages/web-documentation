import { Container } from "react-bootstrap";
import Title from "./components/Title";
import Description from "./components/Description";
import StandardsRecomendations from "./components/standards/StandardsRecomendations";
import StandardsLionRecomendations from "./components/standards/StandardsLionRecomendations";

export default function Standars() {
  return (
    <div className="bg-blur-left-ellipse">
      <Container className="py-3">
        <div className="mb-3 text-light">
          <div className="mb-5">
            <Title title="Contributing to Lion-Packages Open-Source PHP Projects" />

            <Description
              description={
                "We are going to tell you what kind of standards we have within the organization for your personal use or contribution."
              }
            />
          </div>

          <StandardsRecomendations />

          <hr />

          <StandardsLionRecomendations />
        </div>
      </Container>
    </div>
  );
}
