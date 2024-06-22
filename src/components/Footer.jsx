import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        Merci à{" "}
        <a
          href="https://www.nosdeputes.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          nosdeputes.fr
        </a>{" "}
        pour leur fantastique travail !
      </p>
      <p>
        <a
          href="https://actionpopulaire.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Engagez-vous
        </a>
      </p>
    </div>
  );
}

export default Footer;
