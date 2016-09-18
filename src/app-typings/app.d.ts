declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

interface Function {
  iid?: string;
}

declare namespace app {
  interface ITranslation {
    key:string;
    value:string;
    lang:string;

  }

  type scApi = {onFinish: (cb:() => void) => void, playSong: ({url:string}) => void};
}
