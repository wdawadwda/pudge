export type Shoe = {
  id: string;
  img: string;
  imgs: string[];
  name: string;
};

export interface ShoesState {
  shoes: Shoe[];
  selectedShoes: Shoe | null;
}
