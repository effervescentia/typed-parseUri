declare namespace parseUri {
  interface Options {
    strictMode: boolean;
    key: string[];
    q: {
      name: string;
      parser: RegExp;
    };
    parser: {
      strict: RegExp;
      loose: RegExp;
    };
  }

  interface UriStructure {
    source: string;
    protocol: string;
    authority: string;
    userInfo: string;
    user: string;
    password: string;
    host: string;
    port: number;
    relative: string;
    path: string;
    directory: string;
    file: string;
    query: string;
    anchor: string;
  }
}

declare function parseUri(uri: string): parseUri.UriStructure;

declare interface parseUri {
  options: parseUri.Options;
}

export = parseUri;
