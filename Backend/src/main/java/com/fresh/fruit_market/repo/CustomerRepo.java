package com.fresh.fruit_market.repo;

import com.fresh.fruit_market.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

public interface CustomerRepo extends JpaRepository<Customer, String> {
}
