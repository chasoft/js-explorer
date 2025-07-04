export interface JsExplorerOptions {
  explorer: boolean
  template: string
  name?: string
  install?: boolean
  update?: boolean
  overwrite?: boolean
  var?: Record<string, string>
}

export interface TemplateVariable {
  key: string
  value: string
}

export interface TemplateConfig {
  name: string
  description: string
  variables: string[]
  files: string[]
}
