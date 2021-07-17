package com.wordcount.countwordsbackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.charset.StandardCharsets;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CountwordsController {

    @PostMapping("/count")
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