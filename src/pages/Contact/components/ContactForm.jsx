import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // TODO:
    // Connect API / EmailJS / Backend

    alert("Thank you! Your message has been sent.");

    setFormData(initialState);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-xl
      "
    >
      {/* Heading */}

      <div className="mb-8">
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600">
          Send Message
        </span>

        <h2 className="mt-5 text-4xl font-black text-slate-900">
          We'd Love To Hear
          <span className="block text-emerald-500">From You</span>
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          Fill out the form below and our team will respond as soon as possible.
        </p>
      </div>

      {/* Form */}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        {/* Email */}

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            type="tel"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Subject */}

        <Input
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />

        {/* Message */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Message
          </label>

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              bg-slate-50
              px-5
              py-4
              outline-none
              transition-all
              focus:border-emerald-500
              focus:bg-white
              focus:ring-4
              focus:ring-emerald-100
            "
          />
        </div>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          type="submit"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-emerald-500
            to-cyan-500
            px-6
            py-4
            font-semibold
            text-white
            shadow-lg
            transition
            hover:shadow-xl
          "
        >
          <Send size={20} />
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}

/* =====================================================
                Reusable Input
===================================================== */

function Input({ label, type = "text", name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-slate-700">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="
          w-full
          rounded-2xl
          border
          border-slate-300
          bg-slate-50
          px-5
          py-4
          outline-none
          transition-all
          focus:border-emerald-500
          focus:bg-white
          focus:ring-4
          focus:ring-emerald-100
        "
      />
    </div>
  );
}
