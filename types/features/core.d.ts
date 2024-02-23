import type { Coordinate, Offset, TagMap } from './common'
import type { PointStyle, PointParams } from './point'
import type { PolygonParams, PolygonStyle } from './polygon'
import type { PolylineParams, PolylineStyle } from './polyline'
import type { PolymeshParams, PolymeshStyle } from './polymesh'
import type { Condition, Selector } from './query'

export class PointData<S extends PointStyle> implements PointData<S> {
  declare Coordinate: Coordinate
  declare IsHeightBasedSurface: boolean
  declare ID: string
  declare Name: string
  declare Offset: Offset
  declare Parameters: PointParams[S]
  declare Style: S
  declare Tag: TagMap

  constructor(
    Style: S,
    Coordinate: Coordinate,
    IsHeightBasedSurface: false,
    Offset: Offset,
    ID: string,
    Name: string,
    Tag: TagMap,
    Parameters: PointParams[S]
  )
}

export class PolygonData<S extends PolygonStyle> implements PolygonData<S> {
  declare Coordinates: Coordinate[]
  declare IsHeightBasedSurface: boolean
  declare ID: string
  declare Name: string
  declare Offset: Offset
  declare Parameters: PolygonParams[S]
  declare Style: S
  declare Tag: TagMap

  constructor(
    Style: S,
    Coordinates: Coordinate[],
    IsHeightBasedSurface: false,
    Offset: Offset,
    ID: string,
    Name: string,
    Tag: TagMap,
    Parameters: PolygonParams[S]
  )
}

export class PolylineData<S extends PolylineStyle> implements PolylineData<S> {
  declare Coordinates: Coordinate[]
  declare IsHeightBasedSurface: boolean
  declare IsTraceSurface: boolean
  declare ID: string
  declare Name: string
  declare Offset: Offset
  declare Parameters: PolylineParams[S]
  declare Style: S
  declare Tag: TagMap

  constructor(
    Style: S,
    Coordinates: Coordinate[],
    IsHeightBasedSurface: false,
    IsTraceSurface: boolean,
    Offset: Offset,
    ID: string,
    Name: string,
    Tag: TagMap,
    Parameters: PolylineParams[S]
  )
}

export class PolymeshData<S extends PolymeshStyle> implements PolymeshData<S> {
  declare Coordinates: Coordinate[]
  declare DrawBottom: boolean
  declare DrawSide: boolean
  declare DrawTop: boolean
  declare Height: number
  declare ID: string
  declare Name: string
  declare Parameters: PolymeshParams[S]
  declare Style: S
  declare Tag: TagMap

  constructor(
    Style: S,
    Coordinates: Coordinate[],
    Height: number,
    DrawBottom: boolean,
    DrawSide: boolean,
    DrawTop: boolean,
    ID: string,
    Name: string,
    Tag: TagMap,
    Parameters: PolymeshParams[S]
  )
}

export {
  Condition,
  PointParams,
  PointStyle,
  PolygonParams,
  PolygonStyle,
  PolylineParams,
  PolylineStyle,
  PolymeshParams,
  PolymeshStyle,
  Selector,
}
