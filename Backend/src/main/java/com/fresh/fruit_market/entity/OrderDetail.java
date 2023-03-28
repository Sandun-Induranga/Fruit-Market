package com.fresh.fruit_market.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.math.BigDecimal;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class OrderDetail {
    @Id
    private String orderId;
    @Id
    private String fruitId;
    @Id
    private String nic;
    private BigDecimal qty;
    private BigDecimal unitPrice;

    @ManyToOne
    @JoinColumn(name = "orderId", referencedColumnName = "orderId", insertable = false, updatable = false)
    private Order order;

    @ManyToOne
    @JoinColumn(name = "fruitId", referencedColumnName = "fruitId", insertable = false, updatable = false)
    private Fruit fruit;

    @ManyToOne
    @JoinColumn(name = "nic", referencedColumnName = "nic", insertable = false, updatable = false)
    private Driver driver;
}
