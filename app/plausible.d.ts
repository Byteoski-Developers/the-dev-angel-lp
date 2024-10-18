export{}
declare global {
    interface Window {
      plausible: {
        q: any[];
        push: (args: any[]) => void;
      }
    }
  }