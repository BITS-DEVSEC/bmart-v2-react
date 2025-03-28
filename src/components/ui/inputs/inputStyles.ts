import { CSSProperties } from 'react';

export const inputStyles = {
    root: {
      position: "relative" as const,
    },
    input: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 18,
    },
    label: {
      position: "absolute" as const,
      pointerEvents: "none" as const,
      fontSize: "0.75rem",
      paddingLeft: 18,
      paddingTop: 10,
      zIndex: 1,
    },
  } satisfies Partial<Record<string, CSSProperties>>;