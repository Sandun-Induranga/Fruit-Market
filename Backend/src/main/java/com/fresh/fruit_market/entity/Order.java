package com.fresh.fruit_market.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Order {
    @Id
    private String orderId;
    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "nic", referencedColumnName = "nic", nullable = false)
    private Customer nic;
    private LocalDate date;
    private LocalTime time;
    private String location;
    private String status;
    private BigDecimal cost;
}
