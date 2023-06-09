package lk.fresh.itemservice.service;

import lk.fresh.itemservice.dto.ItemDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

public interface ItemService {
    public void saveFruitImage(MultipartFile file) throws RuntimeException, IOException;

    public void saveItem(ItemDTO itemDTO) throws RuntimeException;

    public List<ItemDTO> getAllItems() throws RuntimeException;

    public void updateItem(ItemDTO itemDTO) throws RuntimeException;

    public void deleteItem(String code) throws RuntimeException;

}
