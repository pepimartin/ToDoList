package com.example.todolist;

import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
@RestController
public class ToDoListController {
    private final ArrayList<Task> tasks;

    public ToDoListController() {
        tasks = new ArrayList<>();
    }

    @GetMapping("/tasks")
    public ArrayList<Task> showTasks() {
        return tasks;
    }

    @PostMapping("/tasks")
    public RedirectView addTask(Task task) {
        tasks.add(task);
        return new RedirectView("/");
    }
}
