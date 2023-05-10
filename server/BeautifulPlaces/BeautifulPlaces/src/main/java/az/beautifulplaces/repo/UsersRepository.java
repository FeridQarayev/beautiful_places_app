package az.beautifulplaces.repo;//package az.beautifulplaces.repo;

import az.beautifulplaces.entitiy.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users,Long> {

    @Query("select u from Users u where lower(u.email)=lower(:email) ")
    Optional<Users> findByEmail(String email);
    @Query("select u from Users u where lower(u.email)=lower(:email) and u.enabled=true")
    Optional<Users> findByEmailAndEnabled(String email);


}
