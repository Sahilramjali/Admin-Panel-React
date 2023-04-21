import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import { Box,List,ListItem,ListItemText,Typography,colors,useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../../theme";

const Calendar=()=>{
    const theme=useTheme();
    const color=tokens(theme.palette.mode);
    const[currentEvents,setCurrentEvents]=useState([]);
    const handleDateClick=(selected)=>{
        const title=prompt("please enter a new title for your event");
        const calendarApi=selected.view.calendar;
        calendarApi.unselect();
        if(title){
            calendarApi.addEvent({
                id:`${selected.dateStr}-${title}`,
                title,
                start:selected.startStr,
                end:selected.endStr,
                allDay:selected.allDay
            });
        }
    };
    const handleEventClick=(selected)=>{
        if(window.confirm(`Are you sure want to delete the event ${selected.event.title}`)){
            selected.event.remove();
        }
    };
    return<Box m="20px">
        <Header title="CALENDAR" subtitle="Full calendar Interactive page"/>
        <Box display="flex" justifyContent="space-between">
            {/* calander sidebar */}
            <Box flex="1 1 20%" backgroundColor={color.primary[400]} p='15px' borderRadius="4px">
                <Typography variant="h5" >
                    Events
                </Typography>
                <List>
                    {currentEvents.map((event)=>(
                        <ListItem key={event.id} sx={{backgroundColor:color.greenAccent[500], margin:"1opx 0", borderRadius:"2px"}}>
                            <ListItemText primary={event.title} secondary={
                                <Typography>
                                    {formatDate(event.start,{
                                        year:"numeric",
                                        month:"short",
                                        day:"numeric"
                                    })}
                                </Typography>
                            }/>
                                
 
                        </ListItem>
                    ))}
                </List>
                
            </Box>
            <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            left:"prev, next today",
                            center:"title",
                            right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={events=>setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id:"12456",
                                title:"meet with sam",
                                date:"2023-04-20",
                            },
                        ]}
                    />
                    
                </Box>           
        </Box>
    </Box>

}
export default Calendar;