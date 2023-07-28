
  export type Post = {
    frontmatter: {
      title: string;
      meta_title?: string;
      description?: string;
      image?: string;
      categories: string[];
      author: string;
      tags: string[];
      date?: string;
      draft?: boolean;
    };
    fileName?: string;
    content?: string;
    isSinglePost?: boolean;
  };
  