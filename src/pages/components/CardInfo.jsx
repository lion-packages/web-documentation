
import { DiMysql } from "react-icons/di";
import { RiTestTubeFill } from "react-icons/ri";
import {
  FaPhp,
  FaDocker,
  FaTasks,
  FaTerminal,
  FaLightbulb,
} from "react-icons/fa";
import { MdHttp } from "react-icons/md";
import { TbArrowsLeftRight } from "react-icons/tb";

const CardInfo = ({ title, text, icons }) => {
  const IconComponent = {
    FaLightbulb,
    FaPhp,
    MdHttp,
    RiTestTubeFill,
    DiMysql,
    TbArrowsLeftRight,
    FaTerminal,
    FaDocker,
    FaTasks
  }[icons];

  return (
    <div className="w-96 lg:w-auto lg:h-64 p-6 bg-dark-200 border-separate rounded-xl shadow-2xl whitespace-pre-line">
      <div className="mb-2">
        <IconComponent className="bg-dark-100 text-primary-100 p-2 rounded-lg" size={42} />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {title}
      </h5>
      <p className="font-normal text-clr-secundary">
        {text}
      </p>
    </div>
  )
}

export default CardInfo
