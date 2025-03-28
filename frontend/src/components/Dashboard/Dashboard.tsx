import { Box, Paper, useTheme } from "@mui/material";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import { Card } from "./components/Card/Card";
import { ColumnHeader } from "./components/ColumnHeader/ColumnHeader";

export interface Task {
    id: string;
    content: string;
}

export interface Column {
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
                                <ColumnHeader column={column} />
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
                                                <Card task={task} index={index} column={column} />
                                            ))}
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