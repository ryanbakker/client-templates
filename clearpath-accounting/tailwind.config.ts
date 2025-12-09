// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--clr-primary)",
        "primary-foreground": "var(--clr-primary-foreground)",

        "primary-light": "var(--clr-primary-light)",
        "primary-light-foreground": "var(--clr-primary-light-foreground)",

        accent: "var(--clr-accent)",
        "accent-foreground": "var(--clr-accent-foreground)",

        text: "var(--clr-text)",
        muted: "var(--clr-muted)",
        background: "var(--clr-background)",
      },

      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },

      screens: {
        xs: "480px", // or whatever width you want
      },
    },
  },
};
