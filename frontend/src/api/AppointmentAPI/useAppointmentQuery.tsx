import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createAppointment, getAppointmentById, getAppointments } from "./AppointmentAPI";
import { Appointment } from "../../models/Appointment.model";




const Appointments = {
    GetAppointments: {
        useQuery: () => 
            useQuery({
                queryKey: ['appointments'],
                queryFn: () => getAppointments(),
            })
    },
    GetAppointmentById: {
        useQuery: (id: string) => 
            useQuery({
                queryKey: ['appointments', id],
                queryFn: () => getAppointmentById(id),
            })
    },
    CreateAppointment: {
        useMutation: (appointment: Appointment) =>
            useMutation({
                mutationFn: (appointment: Appointment) => createAppointment(appointment),
            })
    }
}

export default Appointments;
