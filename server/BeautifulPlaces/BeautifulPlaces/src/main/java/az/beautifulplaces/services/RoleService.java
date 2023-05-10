package az.beautifulplaces.services;

import az.beautifulplaces.entitiy.Role;
import az.beautifulplaces.exceptions.BeautifulPlacesException;

public interface RoleService {
    Role getByName(String name) throws BeautifulPlacesException;
}
