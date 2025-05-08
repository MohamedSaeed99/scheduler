package com.backend.scheduler.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.scheduler.models.User;

public interface UserRepository extends JpaRepository<User, Long>{ }
