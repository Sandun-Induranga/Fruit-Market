package com.fresh.fruit_market.controller;

import com.fresh.fruit_market.dto.CustomerDTO;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @PostMapping
    public String saveCustomer(@RequestBody CustomerDTO customerDTO) {
        System.out.println(customerDTO);
        return "test";
    }

}
