export const transitionPresets = {
  springSlow: { type: 'spring', stiffness: 80, damping: 20 },
  springQuick: { type: 'spring', stiffness: 120, damping: 15 },
  easeSmooth: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  easeSnappy: { duration: 0.3, ease: 'easeOut' },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const staggerContainer = (staggerChildren = 0.05, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
