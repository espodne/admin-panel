import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate, DateSelectArg, EventClickArg, EventApi } from "@fullcalendar/core";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../styles/theme";

interface Event {
  id: string;
  title: string;
  start: string | Date;
  end: string | Date | undefined;
  allDay: boolean;
}

const initialEvent = [{
  id: "123", title: "test1", date: "2025-01-27"
}, {
  id: "1332", title: "test2", date: "2025-01-20"
}, {
  id: "13523", title: "test3", date: "2025-01-15"
}

]

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ currentEvents, setCurrentEvents] = useState<Event[]>([]);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });

      // Обновляем состояние currentEvents
      setCurrentEvents([
        ...currentEvents,
        {
          id: `${selected.startStr}-${title}`,
          title,
          start: selected.startStr,
          end: selected.endStr,
          allDay: selected.allDay,
        },
      ]);
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };


  const handleEventsSet = (events: EventApi[]) => {
    const formattedEvents: Event[] = events.map((event) => ({
      id: event.id,
      title: event.title,
      start: event.start ? event.start : new Date(), 
      end: event.end ? event.end : undefined,        
      allDay: event.allDay,
    }));
    setCurrentEvents(formattedEvents);
  };
  return (
    <Box m="10px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          sx={{
            backgroundColor: `${colors.primary[400]}`,
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 100%" ml="10px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={handleEventsSet}
            initialEvents={initialEvent}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
