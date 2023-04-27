package lk.fresh.orderservice.dto;

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
public class OrderDetailDTO {
    private String orderId;
    private String code;
    private int qty;
    private BigDecimal unitPrice;
}
