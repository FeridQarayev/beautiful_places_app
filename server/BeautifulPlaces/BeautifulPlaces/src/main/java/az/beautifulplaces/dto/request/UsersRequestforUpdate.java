package az.beautifulplaces.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersRequestforUpdate {


        private String name;

        private String surname;
        @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}",message = "Invalid Email format")
        @Size(min=6,message = "Email can't be empty 4 character")
        @NotBlank(message = "Email can't be empty")
        private String email;


        private String password;



}
