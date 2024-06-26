export interface Options {
  overrides?: Record<string, any>
  languageOptionsOverrides?: Record<string, any>
  ignores?: Array<string>
  parserOptionsOverrides?: Record<string, any>
}
export interface VueOptions {
  autoImport?: boolean
  typescript?: boolean
}

export {}