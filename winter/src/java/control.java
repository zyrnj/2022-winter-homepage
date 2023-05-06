package src.java;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")

public class control {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello World!";
    }
}