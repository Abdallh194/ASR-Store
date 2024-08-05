import styles from "./footer.module.css";
const { footer } = styles;
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={footer}>© {year} ASR Store , All Right Reserved </footer>
  );
};

export default Footer;
