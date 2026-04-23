import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timePlugin from '@fullcalendar/timegrid'
import dateFnsTimezonePlugin from '@gahojin-inc/fullcalendar-plugins/date-fns-timezone'
import { format } from 'date-fns'
import { useState } from 'react'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<string>()
  const [selectedRawDate, setSelectedRawDate] = useState<string>()

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <div>Select: {selectedDate}</div>
      <div>Raw: {selectedRawDate}</div>
      <FullCalendar
        plugins={[dayGridPlugin, timePlugin, interactionPlugin, dateFnsTimezonePlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridDay',
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        timeZone="Asia/Tokyo"
        select={(arg) => {
          setSelectedRawDate(`${arg.startStr}〜${arg.endStr}`)
          setSelectedDate(`${format(arg.start, 'yyyy-MM-dd HH:mm:ss')}〜${format(arg.end, 'yyyy-MM-dd HH:mm:ss')}`)
        }}
      />
    </div>
  )
}

export default Calendar
