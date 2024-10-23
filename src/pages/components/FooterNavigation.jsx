function FooterNavigation() {
  return (
    <footer
      className="footer mt-auto pt-5 pb-4 bg-dark-logo border-lion-light-top"
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

      <p className="text-center text-light">Copyright © Sergio León. & Lion-Packages Contributors</p>
    </footer>
  );
}

export default FooterNavigation;
