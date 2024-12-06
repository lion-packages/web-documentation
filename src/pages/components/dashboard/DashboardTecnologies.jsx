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
import EmptyTecnologyBlock from "./EmptyTecnologyBlock";
import EmptyTecnologyRow from "./EmptyTecnologyRow";

const key = Object.keys(Content().framework.versions).shift();

export default function DashboardTecnologies() {
  return (
    <div className="text-center">
      <div className="mb-5 text-white text-shadow">
        <h2>Compatibility with your favorite technologies</h2>
      </div>

      {/* ----------------------------------------------------------------- */}

      <EmptyTecnologyRow />

      {/* ----------------------------------------------------------------- */}

      <Row>
        <EmptyTecnologyBlock />

        <EmptyTecnologyBlock />

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <SiVitest
              size={"2.5em"}
              title="Vitest"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <FaReact
              size={"2.5em"}
              title="React"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <GrMysql
              size={"2.5em"}
              title="MySQL"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <RiRemixRunFill
              size={"2.5em"}
              title="Remix"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <SiAstro
              size={"2.5em"}
              title="Astro"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <SiPreact
              size={"2.5em"}
              title="Preact"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <SiPostgresql
              size={"2.5em"}
              title="PostgreSQL"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <RiTestTubeFill
              size={"2.5em"}
              title="PHPUnit"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <SiQwik size={"2.5em"} title="Qwik" className="text-lion-orange" />
          </div>
        </Col>

        <EmptyTecnologyBlock />
      </Row>

      {/* ----------------------------------------------------------------- */}

      <Row>
        <EmptyTecnologyBlock />

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <SiRedis
              size={"2.5em"}
              title="Redis"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <SiSvelte
              size={"2.5em"}
              title="Svelte"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <TbBrandSolidjs
              size={"2.5em"}
              title="SolidJS"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <SiAngular
              size={"2.5em"}
              title="Angular"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <FaVuejs
              size={"2.5em"}
              title="VueJS"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <FaDocker
              size={"2.5em"}
              title="Docker"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <TbAuth2Fa
              size={"2.5em"}
              title="2FA"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <SiMongodb
              size={"2.5em"}
              title="MongoDB"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
          <div
            className="bg-transparent-blur py-4 rounded border-lion-light h-100 blocks"
            role="button"
          >
            <SiJsonwebtokens
              size={"2.5em"}
              title="Json Web Tokens"
              className="text-lion-orange"
            />
          </div>
        </Col>

        <EmptyTecnologyBlock />

        <EmptyTecnologyBlock />
      </Row>

      {/* ----------------------------------------------------------------- */}

      <EmptyTecnologyRow />

      {/* ----------------------------------------------------------------- */}

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center py-4">
        <Link
          to={`/docs/framework/${key}/getting-started/about-as`}
          className="btn btn-orange-custom btn-lg px-4 gap-3"
        >
          Get started
        </Link>

        <a
          href="https://github.com/lion-packages/framework"
          className="btn btn-white-custom btn-lg px-4"
          target="_blank"
        >
          <FaGithub className="me-2" size={"1.3em"} />
          Github
        </a>
      </div>
    </div>
  );
}
