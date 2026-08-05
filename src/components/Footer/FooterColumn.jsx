import { Link } from "react-router-dom";

export default function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-bold text-white">{title}</h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className="text-slate-400 transition hover:text-emerald-400"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
