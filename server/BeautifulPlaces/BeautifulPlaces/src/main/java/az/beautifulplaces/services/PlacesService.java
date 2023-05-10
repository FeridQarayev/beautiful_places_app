package az.beautifulplaces.services;

import az.beautifulplaces.dto.response.ResponseModel;
import az.beautifulplaces.entitiy.Places;

import java.util.List;

public interface PlacesService {
    public ResponseModel<Places> getPlacesList();
    public ResponseModel<Places> findPlaceById(Long id);
    public ResponseModel<Places> addPlaces(Long id);
    public ResponseModel<Places> updatePLace(Long id);
    public ResponseModel<Places> deletePlaceById(Long id);


}
