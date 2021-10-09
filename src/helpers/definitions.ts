import { GatsbyImage } from "gatsby-plugin-image";

export type ImageSharpFluid = GatsbyImage | GatsbyImage[] | undefined;

export type ObjectType = Record<string, any>;

export interface SectionTitle {
  title: string;
  subtitle: string;
}
