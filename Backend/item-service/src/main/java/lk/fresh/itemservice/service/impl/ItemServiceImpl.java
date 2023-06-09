package lk.fresh.itemservice.service.impl;

import lk.fresh.itemservice.dto.ItemDTO;
import lk.fresh.itemservice.entity.Item;
import lk.fresh.itemservice.repo.ItemRepo;
import lk.fresh.itemservice.service.ItemService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

@Service
@Transactional
public class ItemServiceImpl implements ItemService {

    @Autowired
    ItemRepo itemRepo;

    @Autowired
    ModelMapper mapper;

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

    @Override
    public void saveItem(ItemDTO itemDTO) throws RuntimeException {
        if (!itemRepo.existsById(itemDTO.getCode())) itemRepo.save(mapper.map(itemDTO, Item.class));
        else throw new RuntimeException("Item Already Exists..!");
    }

    @Override
    public List<ItemDTO> getAllItems() throws RuntimeException {
        return mapper.map(itemRepo.findAll(), new TypeToken<ArrayList<ItemDTO>>() {
        }.getType());
    }

    @Override
    public void updateItem(ItemDTO itemDTO) throws RuntimeException {
        if (itemRepo.existsById(itemDTO.getCode())) itemRepo.save(mapper.map(itemDTO, Item.class));
        else throw new RuntimeException("Invalid Item..!");
    }

    @Override
    public void deleteItem(String code) throws RuntimeException {
        itemRepo.deleteById(code);
    }
}
