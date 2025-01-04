export type ButtonProps = {
  text: string;
  onClickHandler: () => void;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
};
