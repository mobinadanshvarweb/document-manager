import { PayloadAction } from "@reduxjs/toolkit";

export type InputProps = {
  type?: string;
  placeholder: string;
  action: (value: string) => PayloadAction<string>;
  value: string;
};
