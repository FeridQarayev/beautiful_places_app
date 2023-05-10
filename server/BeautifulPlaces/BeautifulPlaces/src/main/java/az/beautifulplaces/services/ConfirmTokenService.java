package az.beautifulplaces.services;

import az.beautifulplaces.entitiy.ConfirmToken;

public interface ConfirmTokenService {

    public ConfirmToken getByToken(String token);

}
