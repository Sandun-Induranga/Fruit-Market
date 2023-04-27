package lk.fresh.customerservice.service.impl;

import lk.fresh.customerservice.dto.CustomerDTO;
import lk.fresh.customerservice.entity.Customer;
import lk.fresh.customerservice.repo.CustomerRepo;
import lk.fresh.customerservice.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
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
        return mapper.map(customerRepo.findAll(), new TypeToken<ArrayList<CustomerDTO>>() {
        }.getType());
    }

    @Override
    public void updateCustomer(CustomerDTO customerDTO) throws RuntimeException {
        if (customerRepo.existsById(customerDTO.getNic())) customerRepo.save(mapper.map(customerDTO, Customer.class));
        else throw new RuntimeException("Invalid Customer..!");
    }

    @Override
    public void deleteCustomer(String id) throws RuntimeException {
        customerRepo.deleteById(id);
    }
}
