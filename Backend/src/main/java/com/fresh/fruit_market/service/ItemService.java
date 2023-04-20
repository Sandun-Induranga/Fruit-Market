package com.fresh.fruit_market.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

public interface ItemService {
    public void saveFruitImage(MultipartFile file) throws RuntimeException, IOException;
}
