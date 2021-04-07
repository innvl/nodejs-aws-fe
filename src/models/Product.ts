import * as Yup from 'yup';

export type Product = {
  title: string,
  id: string,
  thumbnailUrl: string,
  description?: string,
  authors: string[],
  categories?: string[],
  availableOnStock: number,
  price: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
