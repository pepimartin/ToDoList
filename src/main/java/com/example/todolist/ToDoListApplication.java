package com.example.todolist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ToDoListApplication {
    private final String task;
    public Tasks (String task){

        this.task = task;
    }
    public String getTask() {
        return task;
    }
    public static void main(String[] args) {
        SpringApplication.run(ToDoListApplication.class, args);
    }
}

