package com.example.todolist;

public class Task {
    private final String formInput;

    public Task(String tasks) {

        this.formInput = tasks;
    }

    public String getTask() {

        return formInput;
    }
}

