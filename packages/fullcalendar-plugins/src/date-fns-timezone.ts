import { type TZDate, TZDateMini } from '@date-fns/tz'
import { createPlugin, type PluginDef } from '@fullcalendar/core'
import { NamedTimeZoneImpl } from '@fullcalendar/core/internal'
import { getDate, getHours, getMilliseconds, getMinutes, getMonth, getSeconds, getYear } from 'date-fns'

const toArray = (datetime: TZDate): number[] => {
  return [
    getYear(datetime),
    getMonth(datetime),
    getDate(datetime),
    getHours(datetime),
    getMinutes(datetime),
    getSeconds(datetime),
    getMilliseconds(datetime),
  ]
}

const fromArray = (arr: number[], timeZone: string, _locale?: string): TZDate => {
  return new TZDateMini(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], timeZone)
}

class DatefnsNamedTimeZone extends NamedTimeZoneImpl {
  offsetForArray(a: number[]): number {
    return -1 * fromArray(a, this.timeZoneName).getTimezoneOffset()
  }

  timestampToArray(ms: number): number[] {
    return toArray(new TZDateMini(ms, this.timeZoneName))
  }
}

export default createPlugin({
  name: '@gahojin-inc/fullcalendar-plugins/date-fns-timezone',
  namedTimeZonedImpl: DatefnsNamedTimeZone,
}) as PluginDef
