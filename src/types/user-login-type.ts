export type UserLoginProps = {
  textType?: string;
  passType?: string;
  userPlaceholder: string;
  passPlaceholder: string;
  // action: (value: string) => PayloadAction<string>;
  actionUser: any;
  actionPass: any;
  userValue: string;
  passValue: string;
  text: string;
  onClickHandler: () => void;
  error: string;
  linkText: string;
  link: string;
};
