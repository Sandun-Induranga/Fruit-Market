package com.fresh.fruit_market.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @author: Sandun Induranga
 * @since: 0.1.0
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderFruitDriver_PK implements Serializable {
    private String orderId;
    private String fruitId;
    private String nic;
}
