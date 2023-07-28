import { getAllPosts } from "./mdParser";


// get all taxonomies from frontmatter
export const getTaxonomy =  (folder: string, name: string): Array<string> => {

  const singlePages =  getAllPosts(folder);
  const taxonomyPages = singlePages.map((page) => page.frontmatter[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages?.length; i++) {
    const taxonomyArray = taxonomyPages[i];
    for (let j = 0; j < taxonomyArray?.length; j++) {
      taxonomies.push(taxonomyArray[j]);
    }
  }
  const taxonomy:string[] = Array.from(new Set(taxonomies));

  return taxonomy;
};

export const getAllTaxonomy = (folder: string, name: string) : Array<string> => {
  const singlePages = getAllPosts(folder);
  const taxonomyPages = singlePages.map((page) => page.frontmatter[name]);
  let taxonomies:string[] = [];
  for (let i = 0; i < taxonomyPages?.length; i++) {
    const taxonomyArray = taxonomyPages[i];
    for (let j = 0; j < taxonomyArray?.length; j++) {
      taxonomies.push(taxonomyArray[j]);
    }
  }

  return taxonomies;
};