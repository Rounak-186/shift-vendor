import Link from "next/link";
import { Mail } from "lucide-react";

const productLinks = ["Support", "Guide"];

const policyLinks = ["Terms of Service", "Privacy Policy"];

const companyLinks = ["Home", "About Us", "Contact Us"];

const socialLinks = [
  { name: "Facebook", icon: "/icons/facebook.svg", href: "#" },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: "#" },
  { name: "Instagram", icon: "/icons/instagram.svg", href: "#" },
  { name: "Twitter", icon: "/icons/twitter.svg", href: "#" },
];
export default function Footer() {
  return (
    <footer className="bg-[#252323] text-white self-end w-full">
      <div className="mx-auto max-w-7xl px-8 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          {/* Left Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold uppercase text-primary">
              Shift Vendor
            </h2>

            <div className="mt-8 grid w-fit grid-cols-2 gap-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="bg-white rounded-full flex items-center justify-center p-2 h-10 w-10"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-8 w-8 transition-opacity hover:opacity-70"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl font-semibold">Our Product</h3>

            <ul className="mt-6 space-y-4 text-gray-300">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl font-semibold">Terms & Policies</h3>

            <ul className="mt-6 space-y-4 text-gray-300">
              {policyLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold">Company</h3>

            <ul className="mt-6 space-y-4 text-gray-300">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">Contact</h3>

            <p className="mt-6 text-gray-300">tcv@shifthospitality.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          ©SHIFTVENDOR - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
