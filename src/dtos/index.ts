export interface UserDTO {
    id: string;
    name: string;
    birthdate: string;
    gender: string;
    email: string;
    token?: string;
}

export interface BookDTO {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}
