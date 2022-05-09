import info from 'bundle-text:bootstrap-icons/icons/info.svg'
import x from 'bundle-text:bootstrap-icons/icons/x.svg'
import plus from 'bundle-text:bootstrap-icons/icons/plus.svg'
import translate from 'bundle-text:bootstrap-icons/icons/translate.svg'
import exclamationTriangleFill from 'bundle-text:bootstrap-icons/icons/exclamation-triangle-fill.svg'
import gearFill from 'bundle-text:bootstrap-icons/icons/gear-fill.svg'
import search from 'bundle-text:bootstrap-icons/icons/search.svg'
import undo from 'bundle-text:bootstrap-icons/icons/arrow-counterclockwise.svg'
import arrowLeftShort from 'bundle-text:bootstrap-icons/icons/arrow-left-short.svg'
import chevronExpand from 'bundle-text:bootstrap-icons/icons/chevron-expand.svg'
import chevronUp from 'bundle-text:bootstrap-icons/icons/chevron-up.svg'
import threeDots from 'bundle-text:bootstrap-icons/icons/three-dots.svg'
import chevronContract from 'bundle-text:bootstrap-icons/icons/chevron-contract.svg'


import { Hole } from 'uhtml'

const iconMap = {
  info,
  x,
  plus,
  translate,
  exclamationTriangleFill,
  gearFill,
  search,
  arrowLeftShort,
  undo,
  chevronExpand,
  chevronUp,
  threeDots,
  chevronContract
}

export const icon = (name: keyof typeof iconMap) => 
  new Hole('html', [iconMap[name].replace('class="', 'class="icon ')] as unknown as TemplateStringsArray, [])
