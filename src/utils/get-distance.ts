const asin = Math.asin
const cos = Math.cos
const sin = Math.sin
const sqrt = Math.sqrt
const PI = Math.PI

const R = 6378137 //earths radius

const squared =(x:number)=> { return x * x }
const toRad =(x:number)=> { return x * PI / 180.0 }
const haversine =(x:number)=> {
  return squared(sin(x / 2))
}

export const getDistance= (a:any, b:any)=> {
  const aLat = toRad(a.latitude)
  const bLat = toRad(b.latitude)
  const aLng = toRad(a.longitude)
  const bLng = toRad(b.longitude)

  const ht = haversine(bLat - aLat) + cos(aLat) * cos(bLat) * haversine(bLng - aLng)
  return Math.round((2 * R * asin(sqrt(ht)))/1000).toFixed(2)
}