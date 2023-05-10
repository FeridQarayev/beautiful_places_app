package az.beautifulplaces.dto.request;

//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.Size;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;


@RequiredArgsConstructor
public class TestRequest {
//    @NotBlank
//    @Size(min = 3)
    private long id;
    private final PasswordEncoder passwordEncoder;

}
