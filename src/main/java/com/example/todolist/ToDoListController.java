package com.example.todolist;

import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ToDoListController {
    private final List<Task> tasks = new ArrayList<>();

    @GetMapping("/tasks")
    public List<Task> showTasks() {
        return tasks;
    }

    @PostMapping("/tasks")
    public void addTask(Task task) {
        tasks.add(task);
    }
}
