import type { UIDescriptor } from './command'

interface EventDetail {
  command: UIDescriptor
  enter: UIDescriptor
  leave: UIDescriptor
  message: UIDescriptor
  pick: UIDescriptor
  start: number
  stop: string
}

type EventType =
  | 'command'
  | 'enter'
  | 'leave'
  | 'message'
  | 'pick'
  | 'start'
  | 'stop'

export interface Player extends HTMLElement {
  applicationName: string
  aspectRatio: string
  height: number
  matchMakerURL: string
  set oncommand(handler: (evt: CustomEvent<UIDescriptor>) => void)
  set onenter(handler: (evt: CustomEvent<UIDescriptor>) => void)
  set onleave(handler: (evt: CustomEvent<UIDescriptor>) => void)
  set onmessage(handler: (evt: CustomEvent<UIDescriptor>) => void)
  set onpick(handler: (evt: CustomEvent<UIDescriptor>) => void)
  set onstart(handler: (evt: CustomEvent<number>) => void)
  set onstop(handler: (evt: CustomEvent<string>) => void)
  ready: boolean
  signalingURL: string
  volume: number
  width: number
}
