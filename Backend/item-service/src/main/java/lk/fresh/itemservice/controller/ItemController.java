package lk.fresh.itemservice.controller;

import lk.fresh.itemservice.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

@RestController
@RequestMapping("/api/v1/item")
public class ItemController {
    @Autowired
    ItemService itemService;

    @PutMapping
    public String handleFileUpload(@RequestParam("file") MultipartFile file) {

        System.out.println("You successfully uploaded " + file.getOriginalFilename() + "!");
        try {
            itemService.saveFruitImage(file);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return "Uploaded";
    }
}
