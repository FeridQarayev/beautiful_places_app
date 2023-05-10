package az.beautifulplaces.services;

import az.beautifulplaces.entitiy.Users;

public interface UsersService {
    public Users findByEmail(String email);
}
