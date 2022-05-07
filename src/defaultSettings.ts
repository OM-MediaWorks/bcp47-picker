import { Settings } from './types'
import { GRN } from './Sources/GRN/GRN'
import { LMT } from './Sources/LMT/LMT'

export default {
  sources: {
    lmt: new LMT(),
    grn: new GRN()
  }
} as Settings