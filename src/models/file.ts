export interface ReadFile {
  content: BufferSource;
  path: string;
}

export interface WriteFile {
  content: string;
  path: string;
}
