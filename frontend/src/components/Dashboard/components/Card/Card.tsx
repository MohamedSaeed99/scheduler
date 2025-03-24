import { Draggable } from "@hello-pangea/dnd"
import { Box, Paper, Typography } from "@mui/material"
import { Column, Task } from "../../Dashboard";

type CardProps = {
    task: Task;
    index: number;
    column: Column;
}

export const Card = ({ task, index, column }: CardProps) => {
    return (
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
                            bgcolor: 'white',
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
    )
}
