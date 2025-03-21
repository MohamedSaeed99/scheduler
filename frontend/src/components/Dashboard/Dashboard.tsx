import { Box, Paper, Typography, useTheme } from "@mui/material";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import EventIcon from '@mui/icons-material/Event';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import CancelIcon from '@mui/icons-material/Cancel';

interface Task {
    id: string;
    content: string;
}

interface Column {
    id: string;
    title: string;
    tasks: Task[];
}

const initialData: Column[] = [
    {
        id: "appointment",
        title: "Appointment",
        tasks: [
            { id: "task-1", content: "Schedule doctor visit" },
            { id: "task-2", content: "Book dentist appointment" }
        ]
    },
    {
        id: "confirmation",
        title: "Confirmation",
        tasks: [
            { id: "task-3", content: "Confirm meeting with client" }
        ]
    },
    {
        id: "reschedule",
        title: "Reschedule",
        tasks: [
            { id: "task-5", content: "Reschedule team meeting" }
        ]
    },
    {
        id: "completed",
        title: "Made it",
        tasks: [
            { id: "task-4", content: "Attend team meeting" }
        ]
    },
    {
        id: "no-show",
        title: "No Show",
        tasks: [
            { id: "task-6", content: "Missed client meeting" }
        ]
    }
];

const getColumnIcon = (columnId: string) => {
    switch (columnId) {
        case "appointment":
            return <EventIcon sx={{ mr: 1, color: 'primary.main' }} />;
        case "confirmation":
            return <PendingIcon sx={{ mr: 1, color: 'warning.main' }} />;
        case "reschedule":
            return <EventRepeatIcon sx={{ mr: 1, color: 'info.main' }} />;
        case "completed":
            return <CheckCircleIcon sx={{ mr: 1, color: 'success.main' }} />;
        case "no-show":
            return <CancelIcon sx={{ mr: 1, color: 'error.main' }} />;
        default:
            return null;
    }
};

const Dashboard = () => {
    const theme = useTheme();
    const [columns, setColumns] = useState<Column[]>(initialData);

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const sourceColumn = columns.find(col => col.id === source.droppableId);
        const destColumn = columns.find(col => col.id === destination.droppableId);
        const sourceTasks = [...sourceColumn!.tasks];
        const destTasks = source.droppableId === destination.droppableId
            ? sourceTasks
            : [...destColumn!.tasks];
        const [removed] = sourceTasks.splice(source.index, 1);
        destTasks.splice(destination.index, 0, removed);

        setColumns(columns.map(col => {
            if (col.id === source.droppableId) {
                return {
                    ...col,
                    tasks: sourceTasks
                };
            }
            if (col.id === destination.droppableId) {
                return {
                    ...col,
                    tasks: destTasks
                };
            }
            return col;
        }));
    };

    return (
        <Box sx={{ p: 3, height: 'calc(100vh - 50px)', overflow: 'hidden' }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Box sx={{
                    display: 'flex',
                    height: '100%',
                    position: 'relative'
                }}>
                    {columns.map((column, index) => (
                        <>
                            <Paper
                                key={column.id}
                                sx={{
                                    flex: 1,
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    bgcolor: 'background.default',
                                    borderRadius: 0,
                                    boxShadow: 'none',
                                    borderRight: index < columns.length - 1 ? `1px solid ${theme.palette.divider}` : 'none'
                                }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 2,
                                    pb: 1,
                                    borderBottom: 1,
                                    borderColor: 'divider'
                                }}>
                                    {getColumnIcon(column.id)}
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'text.primary',
                                            fontWeight: 600,
                                            flex: 1
                                        }}
                                    >
                                        {column.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            bgcolor: 'action.hover',
                                            px: 1,
                                            py: 0.5,
                                            borderRadius: 1
                                        }}
                                    >
                                        {column.tasks.length}
                                    </Typography>
                                </Box>
                                <Droppable droppableId={column.id}>
                                    {(provided) => (
                                        <Box
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            sx={{
                                                flex: 1,
                                                minHeight: 0,
                                                overflow: 'auto',
                                                '&::-webkit-scrollbar': {
                                                    width: '8px',
                                                },
                                                '&::-webkit-scrollbar-track': {
                                                    background: 'transparent',
                                                },
                                                '&::-webkit-scrollbar-thumb': {
                                                    background: theme.palette.divider,
                                                    borderRadius: '4px',
                                                },
                                            }}
                                        >
                                            {column.tasks.map((task, index) => (
                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <Paper
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            sx={{
                                                                p: 2,
                                                                mb: 1,
                                                                bgcolor: 'background.paper',
                                                                boxShadow: 'none',
                                                                borderRadius: 1,
                                                                transition: 'all 0.2s ease',
                                                                cursor: 'grab',
                                                                border: '1px solid',
                                                                borderColor: 'divider',
                                                                '&:hover': {
                                                                    bgcolor: 'action.hover',
                                                                    borderColor: 'primary.main',
                                                                },
                                                                '&:active': {
                                                                    cursor: 'grabbing',
                                                                },
                                                                position: 'relative',
                                                                ...(snapshot.isDragging && {
                                                                    bgcolor: 'action.hover',
                                                                    borderColor: 'primary.main',
                                                                    boxShadow: 2,
                                                                })
                                                            }}
                                                        >
                                                            <Box sx={{ 
                                                                display: 'flex', 
                                                                alignItems: 'center',
                                                                gap: 1.5
                                                            }}>
                                                                <Typography
                                                                    sx={{
                                                                        flex: 1,
                                                                        color: 'text.primary',
                                                                        fontWeight: 400,
                                                                        fontSize: '0.875rem',
                                                                        letterSpacing: '0.01em'
                                                                    }}
                                                                >
                                                                    {task.content}
                                                                </Typography>
                                                                <Box
                                                                    sx={{
                                                                        width: '6px',
                                                                        height: '6px',
                                                                        borderRadius: '50%',
                                                                        bgcolor: column.id === 'appointment' ? 'primary.main' :
                                                                                column.id === 'confirmation' ? 'warning.main' :
                                                                                column.id === 'reschedule' ? 'info.main' :
                                                                                column.id === 'completed' ? 'success.main' :
                                                                                'error.main',
                                                                        opacity: 0.8
                                                                    }}
                                                                />
                                                            </Box>
                                                        </Paper>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </Box>
                                    )}
                                </Droppable>
                            </Paper>
                        </>
                    ))}
                </Box>
            </DragDropContext>
        </Box>
    );
};

export default Dashboard;