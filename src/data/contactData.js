import { MapPin, Mail, Phone, Clock } from "lucide-react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const contactInfo = [
  {
    id: 1,
    title: "Head Office",
    value: "Bengaluru, Karnataka, India",
    description: "Visit us for partnerships and business inquiries.",
    icon: MapPin,
    color: "emerald",
  },

  {
    id: 2,
    title: "Email Us",
    value: "hello@funngro.com",
    description: "We'll respond within 24 hours.",
    icon: Mail,
    color: "cyan",
  },

  {
    id: 3,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Monday to Friday • 9:00 AM – 6:00 PM",
    icon: Phone,
    color: "violet",
  },

  {
    id: 4,
    title: "Working Hours",
    value: "Mon - Fri",
    description: "9:00 AM to 6:00 PM (IST)",
    icon: Clock,
    color: "amber",
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    url: "#",
    icon: FaFacebook,
  },

  {
    id: 2,
    name: "Instagram",
    url: "#",
    icon: FaInstagram,
  },

  {
    id: 3,
    name: "LinkedIn",
    url: "#",
    icon: FaLinkedin,
  },

  {
    id: 4,
    name: "Twitter",
    url: "#",
    icon: FaXTwitter,
  },
];
