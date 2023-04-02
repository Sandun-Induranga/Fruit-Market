package com.fresh.fruit_market.controller;

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
    public String saveCustomer() {
        System.out.println("Successfully Saved..!");
        return "test";
    }

}
