package az.beautifulplaces.services.impl;

import az.beautifulplaces.dto.response.ResponseModel;
import az.beautifulplaces.entitiy.Places;
import az.beautifulplaces.repo.PlacesRepository;
import az.beautifulplaces.services.PlacesService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlacesServiceImpl implements PlacesService {
    private final PlacesRepository placesRepository;

    @Override
    public ResponseModel<Places> getPlacesList() {
        return null;
    }

    @Override
    public ResponseModel<Places> findPlaceById(Long id) {
        return null;
    }

    @Override
    public ResponseModel<Places> addPlaces(Long id) {
        return null;
    }

    @Override
    public ResponseModel<Places> updatePLace(Long id) {
        return null;
    }

    @Override
    public ResponseModel<Places> deletePlaceById(Long id) {
        return null;
    }
}
