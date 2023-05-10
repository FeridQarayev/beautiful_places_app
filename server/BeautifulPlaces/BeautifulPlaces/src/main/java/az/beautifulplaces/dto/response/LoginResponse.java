package az.beautifulplaces.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {
    private String accesToken;
//    private Long userId;

    public static LoginResponse loginResponseWithAccesToken(String accesToken){
        var loginresponse=new LoginResponse();
        loginresponse.setAccesToken(accesToken);

        return loginresponse;

    }
}
