package az.beautifulplaces.controller;

import az.beautifulplaces.dto.request.LoginRequest;
import az.beautifulplaces.dto.request.UsersRequestforUpdate;
import az.beautifulplaces.dto.response.CreateUsersResponse;
import az.beautifulplaces.dto.response.LoginResponse;
import az.beautifulplaces.dto.response.ResponseModel;

import az.beautifulplaces.services.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import az.beautifulplaces.dto.request.UsersRequest;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor

public class AuthenticationController {
    private final AuthService authService;





    @PostMapping("/sign-up")
    public ResponseModel<CreateUsersResponse> register(@Valid @RequestBody UsersRequest usersRequest){
       return authService.register(usersRequest);
    }
    @PostMapping("/forgotPassword")
    public ResponseModel<String> forgotPassword(@RequestBody LoginRequest loginRequest){

        return authService.forgotPassword(loginRequest);

    }
    @PostMapping("/updateUser")
    public ResponseModel<CreateUsersResponse> updateUser(@Valid @RequestBody UsersRequestforUpdate usersRequestforUpdate){

        return authService.updateUsers(usersRequestforUpdate);
    }

    @PostMapping("/sign-in")
    public ResponseModel<LoginResponse> login(@RequestBody LoginRequest loginRequest){

        return authService.login(loginRequest);
    }
    @GetMapping("/confirm-mail/{token}")

    public ResponseModel<CreateUsersResponse> confirmUsers(@PathVariable(name = "token") String token){



        return authService.confirm(token);

    }




}
//    private final AuthService authService;
//
//    @PostMapping("/login")
//    public LoginResponse login(@RequestBody LoginRequest loginRequest){
//        return authService.login(loginRequest);
//    }
//    @GetMapping("/try")
//    public String gethi(){
//        return "HI";
//    }