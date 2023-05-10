package az.beautifulplaces.services.impl;

import az.beautifulplaces.entitiy.Role;
import az.beautifulplaces.exceptions.BeautifulPlacesException;
import az.beautifulplaces.repo.RoleRepository;
import az.beautifulplaces.services.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;
    @Override
    public Role getByName(String name) throws BeautifulPlacesException {
        return roleRepository.findByName(name)
                .orElseThrow(()->new BeautifulPlacesException(
                        "Role not found with  "+name+" name",
                        HttpStatus.NOT_FOUND.toString()

                ));

    }
}
