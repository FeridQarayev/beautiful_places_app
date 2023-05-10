package az.beautifulplaces.repo;

import az.beautifulplaces.entitiy.ConfirmToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConfirmTokenRepository extends JpaRepository<ConfirmToken,Long> {
    Optional<ConfirmToken> findByToken(String token);


}
