package com.fresh.fruit_market.controller;

import com.fresh.fruit_market.dto.CustomerDTO;
import com.fresh.fruit_market.service.CustomerService;
import com.fresh.fruit_market.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO customerDTO) {
        customerService.saveCustomer(customerDTO);
        return new ResponseUtil("OK", "Successfully Registered..!", "");
    }

}
