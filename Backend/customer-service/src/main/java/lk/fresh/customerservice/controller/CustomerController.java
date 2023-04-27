package lk.fresh.customerservice.controller;

import lk.fresh.customerservice.dto.CustomerDTO;
import lk.fresh.customerservice.service.CustomerService;
import lk.fresh.customerservice.util.ResponseUtil;
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

    @GetMapping
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil("OK", "Successfully Loaded..!", customerService.getAllCustomers());
    }

    @PutMapping
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO customerDTO) {
        customerService.saveCustomer(customerDTO);
        return new ResponseUtil("OK", "Successfully Updated..!", "");
    }
}
