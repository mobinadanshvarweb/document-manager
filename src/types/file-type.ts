export type FileProps = {
  id: number;
  name: string;
  size: number;
  type: string;
  content?: string | ArrayBuffer | null;
};
