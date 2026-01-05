export const singletonActions = {
  actions: (prev: string[]) =>
    prev.filter((action) => action === "publish" || action === "update"),
};
