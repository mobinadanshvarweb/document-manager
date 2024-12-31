export type EnumProps = {
  customEnum: Record<string, string>;
  action: (value: string) => { type: string; payload: any };
  text: string;
};
