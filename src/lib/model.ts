export type ObbRetType = ArrayBuffer | Blob | FormData | Response | string | object

/** see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type */
export type ContentType = string

export interface Args {
  /** Content-Type, jQuery behavior, default "application/x-www-form-urlencoded; charset=UTF-8" during POST */
  contentType?: false | ContentType
  /** send to server, resolve to query string during GET|DELETE and key/value pairs during POST */
  data?: object
  /** expect data type returned from server. jQuery behavior. default "json" */
  dataType?: 'arrayBuffer' | 'blob' | 'formData' | 'json' | 'text' | 'raw'
  /** pass a fetch() module for isomorphic usage such as node-fetch or isomorphic-fetch */
  fetchModule?: (input: string | Request, init?: RequestInit) => Promise<Response | any>
  fetchHeadersClass?: typeof Headers | any
  /** whether process Args.data automatically. jQuery behavior */
  processData?: boolean
  /** msec default Infinity */
  timeout?: number | null
  /** throw error if response.status higher then 400, default true as traditional */
  throwErrorIfHigher400?: boolean
}

export interface RxRequestInit extends RequestInit, Args {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  referrer?: 'client' | 'no-referrer'
}
