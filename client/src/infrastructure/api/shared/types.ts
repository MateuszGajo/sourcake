export type Impossible<K extends keyof any> = {
  [P in K]: never;
};
