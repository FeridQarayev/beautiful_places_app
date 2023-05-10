package az.beautifulplaces.entitiy;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Getter
@Setter
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String region_name;
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date date_date;

}
