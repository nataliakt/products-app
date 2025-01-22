export const sizes = {
  large: {
    text: {
      fontSize: 20,
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  },
  medium: {
    text: {
      fontSize: 16,
    },
    button: {
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
  },
  small: {
    text: {
      fontSize: 12,
    },
    button: {
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
  },
} as const;

export const variants = {
  primary: {
    text: {
      color: "white",
    },
    button: {
      backgroundColor: "#413C58",
    },
  },
  secondary: {
    text: {
      color: "black",
    },
    button: {
      backgroundColor: "#BADEFC",
    },
  },
  link: {
    text: {
      color: "#0AFFED",
    },
    button: {
      backgroundColor: "transparent",
    },
  },
  danger: {
    text: {
      color: "white",
    },
    button: {
      backgroundColor: "#BB342F",
    },
  },
} as const;
