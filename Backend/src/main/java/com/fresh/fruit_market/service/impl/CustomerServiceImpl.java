package com.fresh.fruit_market.service.impl;

import com.fresh.fruit_market.dto.CustomerDTO;
import com.fresh.fruit_market.entity.Customer;
import com.fresh.fruit_market.repo.CustomerRepo;
import com.fresh.fruit_market.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO customerDTO) throws RuntimeException {
        if (!customerRepo.existsById(customerDTO.getNic())) customerRepo.save(mapper.map(customerDTO, Customer.class));
        else throw new RuntimeException("Customer Already Exits..!");
    }

    @Override
    public List<CustomerDTO> getAllCustomers() throws RuntimeException {
        return null;
    }
}
