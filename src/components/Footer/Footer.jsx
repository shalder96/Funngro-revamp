import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { footerLinks } from "@/data/homeData";
import FooterColumn from "./FooterColumn";
import Container from "@/components/Common/Container/Container";
import FunngroLogo from "@/components/Common/Logo/FunngroLogo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-14 py-20 lg:grid-cols-5">
          {/* Brand */}

          <div className="lg:col-span-2">
            <FunngroLogo className="h-10 text-white" />

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Helping teenagers gain real-world experience, earn money, and
              prepare for successful careers through company-backed projects.
            </p>

            {/* Newsletter */}

            <div className="mt-8 flex overflow-hidden rounded-full border border-slate-700">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-5 py-4 text-white outline-none"
              />

              <button className="bg-emerald-500 px-6 font-semibold transition hover:bg-emerald-600">
                Join
              </button>
            </div>
          </div>

          {/* Columns */}

          {footerLinks.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Funngro. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-slate-900 p-3 transition hover:bg-emerald-500"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-900 p-3 transition hover:bg-emerald-500"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-900 p-3 transition hover:bg-emerald-500"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-900 p-3 transition hover:bg-emerald-500"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
