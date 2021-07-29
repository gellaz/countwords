package com.wordcount.countwordsbackend.controller;

import com.wordcount.countwordsbackend.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.charset.StandardCharsets;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class CountwordsController {

    @GetMapping("/")
    public String home() {
        return "Hello from CountWords REST API";
    }


    @GetMapping(produces = "application/json")
    @RequestMapping({"/validateLogin"})
    public User validateLogin() {
        return new User("User successfully authenticated");
    }

    @PostMapping("/")
    public ResponseEntity countWordsFromText(@RequestBody String text) {
        String trimmedText = text.trim();
        String[] words = trimmedText.split(" ");
        return ResponseEntity.ok(words.length);
    }

    @PostMapping("/upload")
    public ResponseEntity uploadTxtFile(@RequestParam MultipartFile multipartFile) throws Exception {
        String[] fileFrags = multipartFile.getOriginalFilename().split("\\.");
        String extension = fileFrags[1];

        if (!extension.equals("txt"))
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body("File must be .txt");

        String text = new String(multipartFile.getBytes(), StandardCharsets.UTF_8);
        String trimmedText = text.trim();
        String[] words = trimmedText.split(" ");

        return ResponseEntity.ok(words.length);
    }
}