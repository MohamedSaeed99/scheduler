import { Appointment } from "../../models/Appointment.model";


export const getAppointments = async () => {
    const response = await fetch('http://localhost:8080/appointments');
    return response.json();
};

export const getAppointmentById = async (id: string) => {
    const response = await fetch(`http://localhost:8080/appointments/${id}`);
    return response.json();
};

export const createAppointment = async (appointment: Appointment) => {
    const response = await fetch('http://localhost:8080/appointments', {
        method: 'POST',
        body: JSON.stringify(appointment),
    });
    return response.json();
};



