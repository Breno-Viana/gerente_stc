export {};

declare global {
  interface Window {
    api: {
      hello: (str) => void;
    };
  }
}
