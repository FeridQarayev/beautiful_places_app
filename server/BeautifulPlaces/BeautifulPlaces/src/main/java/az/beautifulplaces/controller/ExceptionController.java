package az.beautifulplaces.controller;

import az.beautifulplaces.dto.response.ResponseModel;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionController {

    @ExceptionHandler(Exception.class)
    public ResponseModel handleException(Exception ex){
return ResponseModel.builder()
        .error(true)
        .message(ex.getMessage())
        .code(HttpStatus.INTERNAL_SERVER_ERROR.name())
        .build();

    }

}
