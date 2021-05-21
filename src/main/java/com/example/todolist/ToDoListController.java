package com.example.todolist;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

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

    public RedirectView addTask(Task task) {
        tasks.add(task);
        return new RedirectView("/");
    }
}
