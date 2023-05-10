package az.beautifulplaces.entitiy;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import java.util.Date;


@Entity
@Getter
@Setter
@DynamicInsert
public class Places {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;

    @ManyToOne
    @JoinColumn(name = "region_name_id")
    private Region region_name_id;

    @OneToOne
    @JoinColumn(name = "place_details_id")
    private PlacesDetails placesDetails;

    private String photo_name;

    @ColumnDefault("1")
    private Integer active;
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date date_date;


}