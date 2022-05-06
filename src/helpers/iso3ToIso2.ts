import grn from '../data/grn'

export const iso3ToIso2 = (iso: string) => {
  return grn.iso[iso.toLowerCase()]?.toLowerCase() ?? iso 
}