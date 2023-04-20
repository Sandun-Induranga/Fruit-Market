package com.fresh.fruit_market.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

@RestController
@RequestMapping("/fruit")
public class ItemController {
    @PostMapping
    public String handleFileUpload(@RequestParam("file") MultipartFile file) {

        System.out.println("You successfully uploaded " + file.getOriginalFilename() + "!");
        return "Uploaded";
    }
}
