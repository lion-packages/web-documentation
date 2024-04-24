function FooterNavigation() {
  return (
    <footer
      className="footer mt-auto py-3 bg-dark-logo border-top border-secondary"
      style={{ "--bs-border-opacity": ".5" }}
    >
      <p className="text-center text-light">
        Released under the{" "}
        <a
          href="https://opensource.org/license/mit/"
          className="text-secondary text-decoration-none"
          target="_blank"
        >
          MIT License
        </a>
        .
      </p>

      <p className="text-center text-light">Copyright © Lion-Packages</p>
    </footer>
  );
}

export default FooterNavigation;
