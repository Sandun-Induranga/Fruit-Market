package lk.fresh.itemservice.controller;

import lk.fresh.itemservice.dto.ItemDTO;
import lk.fresh.itemservice.service.ItemService;
import lk.fresh.itemservice.util.ResponseUtil;
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

    @PutMapping("/item")
    public String handleFileUpload(@RequestParam("file") MultipartFile file) {

        System.out.println("You successfully uploaded " + file.getOriginalFilename() + "!");
        try {
            itemService.saveFruitImage(file);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return "Uploaded";
    }

    @PostMapping
    public ResponseUtil saveItem(@RequestBody ItemDTO itemDTO) {
        itemService.saveItem(itemDTO);
        return new ResponseUtil("OK", "Successfully Added..!", "");
    }

    @PutMapping
    public ResponseUtil updateItem(@RequestBody ItemDTO itemDTO) {
        itemService.updateItem(itemDTO);
        return new ResponseUtil("OK", "Successfully Updated..!", "");
    }

    @DeleteMapping
    public ResponseUtil deleteItem(@RequestParam String code) {
        itemService.deleteItem(code);
        return new ResponseUtil("OK", "Successfully Deleted..!", "");
    }
}
