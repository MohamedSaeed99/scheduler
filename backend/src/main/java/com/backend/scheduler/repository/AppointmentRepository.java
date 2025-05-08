package com.backend.scheduler.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.scheduler.models.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> { }
