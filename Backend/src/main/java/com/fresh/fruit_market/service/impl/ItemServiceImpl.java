package com.fresh.fruit_market.service.impl;

import com.fresh.fruit_market.service.ItemService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

@Service
@Transactional
public class ItemServiceImpl implements ItemService {
    @Override
    public void saveFruitImage(MultipartFile file) throws RuntimeException {
        try {
            file.transferTo(new File("http://localhost:8080/fresh" + file.getOriginalFilename()));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
