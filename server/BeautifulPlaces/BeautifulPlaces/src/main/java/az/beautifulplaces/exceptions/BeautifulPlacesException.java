package az.beautifulplaces.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BeautifulPlacesException extends RuntimeException{
    private String message;
    private String code;
    public BeautifulPlacesException(String message,String code) {
        super(message);
        this.message=message;
        this.code=code;

    }
}
