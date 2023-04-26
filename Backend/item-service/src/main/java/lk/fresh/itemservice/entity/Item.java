package lk.fresh.itemservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
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
public class Item {
    @Id
    private String fruitId;
    private String name;
    private BigDecimal qtyOnHand;
    private BigDecimal unitPrice;
    private String fruitImage;
}
