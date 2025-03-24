import { Box, Typography } from "@mui/material"
import { Column } from "../../Dashboard";
import EventIcon from '@mui/icons-material/Event';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import CancelIcon from '@mui/icons-material/Cancel';

type ColumnHeaderProps = {
    column: Column;
}

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

export const ColumnHeader = ({ column }: ColumnHeaderProps) => {
    return (
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
    )
}