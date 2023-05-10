package az.beautifulplaces.entitiy;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.util.Date;
import java.util.UUID;

import static az.beautifulplaces.constant.Times.TOKEN_EXPIRED_TIME;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class ConfirmToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String token;
    private Date expiredAt;
    private String email;

    public ConfirmToken(Users user){
        this.email= user.getEmail();
        this.token=UUID.randomUUID().toString();
        this.expiredAt=Date.from(Instant.now().plusSeconds(TOKEN_EXPIRED_TIME));

    }
}
