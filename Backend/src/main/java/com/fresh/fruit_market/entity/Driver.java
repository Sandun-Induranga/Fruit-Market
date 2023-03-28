package com.fresh.fruit_market.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Driver {
    @Id
    private String nic;
    private String name;
    private String address;
    private String contact;
    private String email;
}
