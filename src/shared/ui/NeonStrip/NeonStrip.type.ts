export const NeonStripColors = {
  Green: "green",
  Yellow: "yellow",
} as const;

export type NeonStripColor =
  (typeof NeonStripColors)[keyof typeof NeonStripColors];
