import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-14 text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600">
            Visit Our Office
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Find Us Easily
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We'd love to meet you. Visit our office for business inquiries,
            partnerships, or collaboration opportunities.
          </p>
        </div>

        {/* Layout */}

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Map */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl lg:col-span-2"
          >
            <iframe
              title="Funngro Office"
              src="https://www.google.com/maps?q=Bengaluru,India&output=embed"
              loading="lazy"
              className="h-[500px] w-full"
              allowFullScreen
            />
          </motion.div>

          {/* Info Card */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-cyan-500 text-white">
              <MapPin size={30} />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Head Office
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Bengaluru,
              <br />
              Karnataka,
              <br />
              India
            </p>

            <div className="my-8 h-px bg-slate-200" />

            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-slate-900">Working Hours</h4>

                <p className="mt-2 text-slate-600">
                  Monday – Friday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Support</h4>

                <p className="mt-2 text-slate-600">hello@funngro.com</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-linear-to-r
                from-emerald-500
                to-cyan-500
                px-6
                py-4
                font-semibold
                text-white
                transition
                hover:scale-[1.02]
              "
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
