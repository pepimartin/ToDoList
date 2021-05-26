package com.example.todolist;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ToDoListController {

    private Map<Integer,Task> tasks;
    private Integer counter = 0;

    public ToDoListController(){
        tasks = new HashMap<>();
    }


    @GetMapping("/tasks")
    public Map<Integer,Task> allTasks() {return tasks;}

    @PostMapping("/tasks")
    public RedirectView addnewTask(Task task){
        tasks.put(counter++,task);
        return new RedirectView("/pages/completed.html");
    }

    @DeleteMapping("/tasks/{index}")
    void deleteTask(@PathVariable int index) {
        tasks.remove(index);
    }

}
