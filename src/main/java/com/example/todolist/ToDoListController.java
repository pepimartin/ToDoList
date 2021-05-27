package com.example.todolist;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @DeleteMapping("/tasks/{index}")
    void deleteTask(@PathVariable int index) {
        tasks.remove(index);
    }

}
