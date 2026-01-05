import { getFooter } from "@/lib/queries/getFooter";

async function Footer() {
  const data = await getFooter();

  return (
    <footer className="text-center bg-teal-950 py-7 text-white bottom-0">
      <p className="font-light text-sm">
        {data?.subtext ?? "© 2026 Clearpath Accounting. All rights reserved."}
      </p>
    </footer>
  );
}

export default Footer;
