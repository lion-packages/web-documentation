import { Col, Row } from "react-bootstrap";
import { FaDocker, FaGithub, FaReact, FaVuejs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiRemixRunFill, RiTestTubeFill } from "react-icons/ri";
import {
  SiAngular,
  SiAstro,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiPreact,
  SiQwik,
  SiRedis,
  SiSvelte,
  SiVitest,
} from "react-icons/si";
import { TbAuth2Fa, TbBrandSolidjs } from "react-icons/tb";
import { Link } from "react-router-dom";
import Content from "../../../Tools/Content";
import EmptyTechnologyRow from "./EmptyTechnologyRow";
import EmptyTechnologyBlock from "./EmptyTechnologyBlock";
import TechnologyBlock from "./TechnologyBlock";
import GetStartedButtons from "./GetStartedButtons";

const key = Object.keys(Content().framework.versions).shift();

export default function DashboardTecnologies() {
  return (
    <div className="text-center">
      <div className="mb-5 text-white text-shadow">
        <h2>Compatibility with your favorite technologies</h2>
      </div>

      {/* ----------------------------------------------------------------- */}

      <EmptyTechnologyRow />

      {/* ----------------------------------------------------------------- */}

      <Row>
        <EmptyTechnologyBlock />

        <EmptyTechnologyBlock />

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <SiVitest
              size={"2.5em"}
              title="Vitest"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <FaReact
              size={"2.5em"}
              title="React"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <GrMysql
              size={"2.5em"}
              title="MySQL"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <RiRemixRunFill
              size={"2.5em"}
              title="Remix"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <SiAstro
              size={"2.5em"}
              title="Astro"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <SiPreact
              size={"2.5em"}
              title="Preact"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <SiPostgresql
              size={"2.5em"}
              title="PostgreSQL"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <RiTestTubeFill
              size={"2.5em"}
              title="PHPUnit"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <SiQwik size={"2.5em"} title="Qwik" className="text-lion-orange" />
          </TechnologyBlock>
        </Col>

        <EmptyTechnologyBlock />
      </Row>

      {/* ----------------------------------------------------------------- */}

      <Row>
        <EmptyTechnologyBlock />

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <SiRedis
              size={"2.5em"}
              title="Redis"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <SiSvelte
              size={"2.5em"}
              title="Svelte"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <TbBrandSolidjs
              size={"2.5em"}
              title="SolidJS"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <SiAngular
              size={"2.5em"}
              title="Angular"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <FaVuejs
              size={"2.5em"}
              title="VueJS"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <FaDocker
              size={"2.5em"}
              title="Docker"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <TbAuth2Fa
              size={"2.5em"}
              title="2FA"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <SiMongodb
              size={"2.5em"}
              title="MongoDB"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <TechnologyBlock>
            <SiJsonwebtokens
              size={"2.5em"}
              title="Json Web Tokens"
              className="text-lion-orange"
            />
          </TechnologyBlock>
        </Col>

        <EmptyTechnologyBlock />

        <EmptyTechnologyBlock />
      </Row>

      {/* ----------------------------------------------------------------- */}

      <EmptyTechnologyRow />

      {/* ----------------------------------------------------------------- */}

      <GetStartedButtons />
    </div>
  );
}
