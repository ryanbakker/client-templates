function Footer() {
  return (
    <footer className="text-center bg-teal-950 py-7 text-white bottom-0">
      <p className="font-light text-sm">
        &copy; {new Date().getFullYear()} Clearpath Accounting. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
