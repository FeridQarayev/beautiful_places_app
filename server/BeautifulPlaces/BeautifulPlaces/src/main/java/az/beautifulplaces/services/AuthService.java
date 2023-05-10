package az.beautifulplaces.services;

import az.beautifulplaces.dto.request.LoginRequest;
import az.beautifulplaces.dto.request.UsersRequest;
import az.beautifulplaces.dto.request.UsersRequestforUpdate;
import az.beautifulplaces.dto.response.CreateUsersResponse;
import az.beautifulplaces.dto.response.LoginResponse;
import az.beautifulplaces.dto.response.ResponseModel;

public interface AuthService {

    ResponseModel<CreateUsersResponse> register(UsersRequest usersRequest);

    ResponseModel<CreateUsersResponse> confirm(String token);

    ResponseModel<LoginResponse> login(LoginRequest loginRequest);

    ResponseModel<String> forgotPassword(LoginRequest loginRequest);

    ResponseModel<CreateUsersResponse> updateUsers(UsersRequestforUpdate usersRequestforUpdate);
}
