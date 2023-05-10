package az.beautifulplaces.entitiy;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Getter
@Setter
public class PlacesDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String currentLocation;
    @Column(columnDefinition = "TEXT")
    private String description;

    @Basic(fetch = FetchType.LAZY)
    @Column(name = "photo", nullable = true)
    private Byte[] photo;
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date date_date;






}
