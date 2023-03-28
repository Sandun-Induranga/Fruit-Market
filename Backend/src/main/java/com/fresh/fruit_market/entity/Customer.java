package com.fresh.fruit_market.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Customer {
    @Id
    private String nic;
    private String name;
    private String license;
    private String contact;
    private String email;
    @OneToOne(cascade = CascadeType.ALL)
    private User user;
}
