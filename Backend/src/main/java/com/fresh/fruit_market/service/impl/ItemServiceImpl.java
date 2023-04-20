package com.fresh.fruit_market.service.impl;

import com.fresh.fruit_market.service.ItemService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

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
            String projectPath = "/media/sandu/0559F5C021740317/GDSE/Project_Zone/IdeaProjects/Fruit-Market/Frontend/frontend/src/assets";
            File uploadsDir = new File(projectPath + "/uploads");
            uploadsDir.mkdir();
            file.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file.getOriginalFilename()));
            System.out.println(new File(uploadsDir.getAbsolutePath() + "/" + file.getOriginalFilename()));

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
