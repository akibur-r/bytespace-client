import { FooterBar } from "./footer-bar";
import { FooterNav } from "./footer-nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-100">
      <FooterNav />
      <FooterBar />
    </footer>
  );
}