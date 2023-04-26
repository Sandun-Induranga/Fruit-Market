package lk.fresh.itemservice.repo;

import lk.fresh.itemservice.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

public interface ItemRepo extends JpaRepository<Item, String> {
}
