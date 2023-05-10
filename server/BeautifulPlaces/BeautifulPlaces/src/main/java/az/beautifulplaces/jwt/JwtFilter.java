package az.beautifulplaces.jwt;

import az.beautifulplaces.dto.response.ResponseModel;
import az.beautifulplaces.entitiy.Users;
import az.beautifulplaces.exceptions.BeautifulPlacesException;
import az.beautifulplaces.services.impl.UsersDetailService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
@PropertySource("classpath:whitelist.yaml")
public class JwtFilter extends OncePerRequestFilter {

    private List<String> WHITE_LIST=List.of(
            "/api/v1/auth/sign-in",
            "/api/v1/auth/sign-up",
            "/api/v1/auth/confirm-mail/"


      );


    private final JwtService jwtService;
    private final UsersDetailService usersDetailService;
    private final ObjectMapper objectMapper;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

           try{

               if(isInWhiteList(request.getServletPath())){




                   filterChain.doFilter(request,response);
               }else {
                   String header=request.getHeader(HttpHeaders.AUTHORIZATION);
                   String token=null;
                   if(!ObjectUtils.isEmpty(header) && !StringUtils.hasText(header)){
                       throw new BeautifulPlacesException("Authorization header is Empty", HttpStatus.BAD_REQUEST.toString());
                   }
                   else{
                       token=header.substring(7);
                       String gmail= jwtService.getEmailFromToken(token);
                       UserDetails userDetails=usersDetailService.loadUserByUsername(gmail);
                       UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(gmail,null,userDetails.getAuthorities());
                       SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                       filterChain.doFilter(request,response);
                   }


               }
           }
           catch (BeautifulPlacesException e){

               var exceptionResponse= ResponseModel.<Object>builder()
                       .data(new Object())
                       .code(e.getCode())
                       .message(e.getMessage())
                       .error(true)
                       .build();
               objectMapper.writeValue(response.getOutputStream(),exceptionResponse);

           }
           catch (JwtException e) {

               var exceptionResponse= ResponseModel.builder()
                       .data(null)
                       .code(HttpStatus.INTERNAL_SERVER_ERROR.toString())
                       .message(e.getMessage())
                       .error(true)
                       .build();

               response.setContentType(MediaType.APPLICATION_JSON_VALUE);
               objectMapper.writeValue(response.getOutputStream(),exceptionResponse);

           }
           catch (Exception e){
             ;
               var exceptionResponse= ResponseModel.builder()
                       .data(null)
                       .code(HttpStatus.INTERNAL_SERVER_ERROR.toString())
                       .message(e.getMessage())
                       .error(true)
                       .build();
               response.setContentType(MediaType.APPLICATION_JSON_VALUE);
               objectMapper.writeValue(response.getOutputStream(),exceptionResponse);

           }




    }




//    private boolean isInWhiteList(String path){
//        for(String url:WHITE_LIST){
//            System.err.println("idk "+path);
//            System.err.println("idk "+url);
//            if(path.startsWith(url)){
//                System.err.println(path);
//                System.err.println(url);
//                return true;
//            }
//
//        }
//        return false;
//
//    }
private boolean isInWhiteList(String path) {
    boolean ok = false;
    for (String whitePath : WHITE_LIST) {
        if (path.contains(whitePath)) {
            ok = true;
        }
    }
    return ok;
}

}
