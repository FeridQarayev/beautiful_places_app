package az.beautifulplaces.repo;

import az.beautifulplaces.entitiy.Places;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlacesRepository extends JpaRepository<Places,Long> {


}
