import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import content from "../../content.json";
import json_docs from "../Versions/framework/framework-v1.json";

const ModulesContext = createContext();

export function ModulesProvider({ children }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [version, setVersion] = useState("");

  const [type_version, setType_version] = useState("");

  const [modules, setModules] = useState("");

  const [selectVersion, setSelectVersion] = useState(version);

  const [framework_versions, setFramework_versions] = useState([]);

  const setActualVersion = async (type_version) => {
    setLoading(true);

    const version = [null, undefined, ""].includes(selectVersion)
      ? Object.keys(content[type_version].docs).pop()
      : selectVersion;

    setVersion(version);

    setType_version(type_version);

    const listDocs = Object.keys(content[type_version].docs);

    setFramework_versions(listDocs);

    // await import(content[type_version].docs[version]).then((res) => {
    //   setModules(res.default);

    //   console.log(res.default);

    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 200);
    // });

    setModules(json_docs);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  const isEmpty = (value) => {
    return [null, undefined, ""].includes(value);
  };

  useEffect(() => {
    if (isEmpty(version) || isEmpty(type_version) || isEmpty(modules)) {
      navigate("/");
    }
  }, []);

  return (
    <ModulesContext.Provider
      value={{
        loading,
        version,
        type_version,
        modules,
        framework_versions,
        setActualVersion,
        setSelectVersion,
      }}
    >
      {children}
    </ModulesContext.Provider>
  );
}

export const useModules = () => useContext(ModulesContext);
