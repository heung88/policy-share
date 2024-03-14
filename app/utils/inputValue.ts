export const inputValue = (event: React.FormEvent<HTMLInputElement>, setFunc: Function) => {
  setFunc(event.currentTarget.value);
};
