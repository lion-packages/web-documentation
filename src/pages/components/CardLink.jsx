import { motion } from "framer-motion";
import { LinkContainer } from "react-router-bootstrap";

export default function CardLink({ title, description, uri }) {
  return (
    <LinkContainer to={uri}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.5,
          ease: "backInOut",
        }}
        className={"p-4 rounded border-lion-light h-100"}
        role="button"
      >
        <span className={"fs-4 text-lion-orange text-shadow"}>{title}</span>

        <i className="bi bi-arrow-right text-lion-orange text-shadow float-end fs-3"></i>

        <hr />

        <p className="lead text-white text-shadow">{description}</p>
      </motion.div>
    </LinkContainer>
  );
}
