package az.beautifulplaces.services.impl;//package az.beautifulplaces.services.impl;

import az.beautifulplaces.exceptions.BeautifulPlacesException;
import az.beautifulplaces.repo.UsersRepository;
import az.beautifulplaces.services.PlacesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsersDetailService implements UserDetailsService {
    private final UsersRepository usersRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        return usersRepository.findByEmail(email)
                .orElseThrow(() -> new BeautifulPlacesException("Gmail Not Found with this "+email+" gmail", HttpStatus.BAD_REQUEST.toString()));
    }
}
