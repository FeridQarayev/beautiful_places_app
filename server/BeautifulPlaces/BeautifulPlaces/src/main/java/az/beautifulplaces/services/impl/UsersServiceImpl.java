package az.beautifulplaces.services.impl;

import az.beautifulplaces.entitiy.Users;
import az.beautifulplaces.exceptions.BeautifulPlacesException;
import az.beautifulplaces.repo.UsersRepository;
import az.beautifulplaces.services.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService {
    private final UsersRepository usersRepository;
    @Override
    public Users findByEmail(String email) {
        var users=usersRepository.findByEmail(email)
                .orElseThrow(()-> new BeautifulPlacesException(
                        "User not found by this email "+email
                        , HttpStatus.BAD_REQUEST.toString()));



        return users;
    }
}
