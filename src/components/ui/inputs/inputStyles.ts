export const inputStyles = {
    root: {
      position: "relative",
    },
    input: {
      height: 58,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 20,
    },
    label: {
      position: "absolute",
      pointerEvents: "none",
      fontSize: "0.75rem",
      paddingLeft: 18,
      paddingTop: 10,
      zIndex: 1,
    },
  } as const;

  export const inputStylesAlt = {
    root: {
      position: "relative",
    },
    input: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 28,
    },
    label: {
      position: "absolute",
      pointerEvents: "none",
      fontSize: "0.75rem",
      paddingLeft: 18,
      paddingTop: 10,
      zIndex: 1,
    },
  } as const;