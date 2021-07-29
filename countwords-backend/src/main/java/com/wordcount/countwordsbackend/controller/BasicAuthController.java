package com.wordcount.countwordsbackend.controller;

import com.wordcount.countwordsbackend.model.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class BasicAuthController {


    @GetMapping("/basicauth")
    public AuthenticationBean basicAuth() {
        return new AuthenticationBean("You are authenticated");
    }
}
