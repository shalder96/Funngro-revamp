import { motion } from "framer-motion";
import { contactInfo, socialLinks } from "@/data/contactData";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl"
    >
      {/* Badge */}

      <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600">
        Contact Information
      </span>

      {/* Heading */}

      <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
        We're Always Ready
        <span className="block bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
          To Help You
        </span>
      </h2>

      {/* Description */}

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Whether you're a student looking for opportunities, a parent with
        questions, or a company searching for talented teenagers, our team is
        always happy to help.
      </p>

      {/* Contact List */}

      <div className="mt-12 space-y-8">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex items-start gap-5">
              {/* Icon */}

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-cyan-500 text-white shadow-lg">
                <Icon size={28} />
              </div>

              {/* Content */}

              <div className="flex-1 border-b border-slate-200 pb-7">
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-lg font-semibold text-slate-700">
                  {item.value}
                </p>

                <p className="mt-2 leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Social */}

      <div className="mt-12">
        <h3 className="text-xl font-bold text-slate-900">Follow Us</h3>

        <div className="mt-5 flex gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.id}
                href={social.url}
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  transition-all
                  duration-300
                  hover:border-emerald-400
                  hover:bg-emerald-50
                "
              >
                <Icon size={22} className="text-slate-700" />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}

      <div className="mt-12 rounded-3xl bg-linear-to-r from-emerald-500 via-emerald-400 to-cyan-500 p-8 text-white">
        <h3 className="text-2xl font-bold">Need Immediate Assistance?</h3>

        <p className="mt-3 leading-7 text-emerald-50">
          Our support team usually replies within one business day. We're here
          to help you succeed.
        </p>

        <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-emerald-600 transition hover:scale-105">
          Contact Support
        </button>
      </div>
    </motion.div>
  );
}
