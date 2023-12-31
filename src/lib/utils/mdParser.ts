import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content');

export const parseFrontmatter = (frontmatter: any) => {
  const frontmatterString = JSON.stringify(frontmatter);
  return JSON.parse(frontmatterString);
};

export const getSinglePost = (fileName:string) =>{
  const fullPath = path.join(postsDirectory,fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data: frontmatter } = matter(fileContents);
  
  return {
    frontmatter:parseFrontmatter(frontmatter),
    content,
  };
};

export const getAllPosts = (folderName:string) => {
  const fullPath = path.join(postsDirectory,folderName);
  const files = fs.readdirSync(fullPath);

  const posts = files.map((file) => {
  const fileName = file.replace('.md', '');
  const { content, data: frontmatter } = matter(fs.readFileSync(path.join(fullPath, file), 'utf8'));
      
    return {
      frontmatter:parseFrontmatter(frontmatter),
      fileName,
      content,
    };
  });

  return posts;
};

