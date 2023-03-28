package com.fresh.fruit_market.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.math.BigDecimal;

/**
 * @author : Sandun Induranga
 * @since : 0.1.0
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class FruitDTO {
    private String fruitId;
    private String name;
    private BigDecimal qtyOnHand;
    private BigDecimal unitPrice;
    private String fruitImage;
}
