interface WebViewUE {
  $receive: {
    asyn(key: string, json: string, backid: string)
  }
  interface: {
    [x: string]: CveCallback
  }
}
