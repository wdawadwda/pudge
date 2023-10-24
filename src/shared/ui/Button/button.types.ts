export const ButtonAppearance = {
  Primary: "primary",
  Secondary: "secondary",
  Secondary2: "alert",
} as const;

export type ButtonAppearances =
  (typeof ButtonAppearance)[keyof typeof ButtonAppearance];
