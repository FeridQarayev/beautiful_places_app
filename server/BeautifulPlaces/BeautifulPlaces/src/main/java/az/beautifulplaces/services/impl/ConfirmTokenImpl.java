package az.beautifulplaces.services.impl;

import az.beautifulplaces.BeautifulPlacesApplication;
import az.beautifulplaces.entitiy.ConfirmToken;
import az.beautifulplaces.exceptions.BeautifulPlacesException;
import az.beautifulplaces.repo.ConfirmTokenRepository;
import az.beautifulplaces.services.ConfirmTokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class ConfirmTokenImpl implements ConfirmTokenService {
    private final ConfirmTokenRepository confirmTokenRepository;

    public ConfirmToken getByToken(String token){
        var confirmToken=confirmTokenRepository.findByToken(token)
                .orElseThrow(()-> new BeautifulPlacesException(
                        "Token not found "+token,
                        HttpStatus.BAD_REQUEST.toString()
                ));

        return confirmToken;


    }

    private void isValidToken(ConfirmToken confirmToken){
        if (confirmToken.getExpiredAt().before(Date.from(Instant.now()))) {
            throw new BeautifulPlacesException(
                    "Token has expired: " + confirmToken.getToken(),
                    HttpStatus.BAD_REQUEST.toString()
            );
    }}

}
