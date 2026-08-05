/* ===========================================================
   Reusable Framer Motion Variants
   Used Across Entire Project
=========================================================== */

/* Fade Up */

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 50,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
};

/* Fade Down */

export const fadeDown = {
  initial: {
    opacity: 0,
    y: -50,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
};

/* Fade Left */

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -60,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
};

/* Fade Right */

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 60,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
};

/* Fade Scale */

export const fadeScale = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
};

/* Stagger Container */

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* Stagger Item */

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

/* Hover Effects */

export const cardHover = {
  y: -10,
  scale: 1.03,
  transition: {
    duration: 0.3,
  },
};

export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
  },
};

export const iconHover = {
  rotate: 10,
  scale: 1.15,
  transition: {
    duration: 0.2,
  },
};

/* Floating Animation */

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    repeat: Infinity,
    duration: 4,
    ease: "easeInOut",
  },
};

/* Phone Animation */

export const phoneFloat = {
  y: [0, -12, 0],
  rotate: [-2, 0, -2],
  transition: {
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut",
  },
};
