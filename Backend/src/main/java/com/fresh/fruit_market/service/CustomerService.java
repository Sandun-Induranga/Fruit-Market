package com.fresh.fruit_market.service;

import com.fresh.fruit_market.dto.CustomerDTO;

import java.util.List;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

public interface CustomerService {
    public void saveCustomer(CustomerDTO customerDTO) throws RuntimeException;
    public List<CustomerDTO> getAllCustomers() throws RuntimeException;
}
