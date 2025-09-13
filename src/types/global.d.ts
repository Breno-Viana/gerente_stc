export {};

declare global {
  interface Window {
    api: {
      showWarning: (str) => void;
    };
  }
}
