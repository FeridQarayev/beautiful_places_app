package az.beautifulplaces.services.impl;

import az.beautifulplaces.dto.request.LoginRequest;
import az.beautifulplaces.dto.request.UsersRequest;
import az.beautifulplaces.dto.request.UsersRequestforUpdate;
import az.beautifulplaces.dto.response.CreateUsersResponse;
import az.beautifulplaces.dto.response.LoginResponse;
import az.beautifulplaces.dto.response.ResponseModel;
import az.beautifulplaces.entitiy.ConfirmToken;
import az.beautifulplaces.entitiy.Role;
import az.beautifulplaces.entitiy.Users;
import az.beautifulplaces.exceptions.BeautifulPlacesException;

import az.beautifulplaces.jwt.JwtService;
import az.beautifulplaces.repo.ConfirmTokenRepository;
import az.beautifulplaces.repo.UsersRepository;
import az.beautifulplaces.services.AuthService;
import az.beautifulplaces.services.ConfirmTokenService;
import az.beautifulplaces.services.RoleService;
import az.beautifulplaces.services.UsersService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Value;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import static az.beautifulplaces.constant.Roles.*;
import static az.beautifulplaces.constant.Times.VERIFY_CODE;


@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {


    @Value("${app.host}")
    private String appHost;


    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper;
    private final JavaMailSender javaMailSender;
    private final ConfirmTokenRepository confirmTokenRepository;
    private final ConfirmTokenService confirmTokenService;
    private final UsersService usersService;
    private final RoleService roleService;

//    public LoginResponse login(LoginRequest request) {
//        try{
//        UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(request.getGmail(),request.getPassword());
//
//
//    Authentication authentication =authenticationManager.authenticate(authenticationToken);
//            Users users= (Users) authentication.getPrincipal();
//            String accesToken=jwtService.getToken(users);
//            LoginResponse loginResponse=new LoginResponse(accesToken,users.getId());
//            return loginResponse;
//}
//
//catch(Exception e){
//    throw new AuthenticationCredentialsNotFoundException("Username or password invalid!!!");
//
//
//
//        }
//
//
//    }

    @Override
    @Transactional
    public ResponseModel<CreateUsersResponse> register(UsersRequest usersRequest) {
      try {
          validateUser(usersRequest);

          var users = modelMapper.map(usersRequest, Users.class);

          users.setPassword(passwordEncoder.encode(users.getPassword()));
          var savedusers=usersRepository.save(users);
          Role role=roleService.getByName(USER);
          users.setRoles(List.of(role));
          sendConfirmMail(savedusers);
//          Thread thread=new Thread(()->{
//              try {
//                  sendConfirmMail(savedusers);
//              } catch (UnsupportedEncodingException e) {
//                  throw new RuntimeException(e);
//              } catch (MessagingException e) {
//                  throw new RuntimeException(e);
//              }
//
//          });
          var createUserResponse=new CreateUsersResponse(savedusers.getId());
          var responseModel=ResponseModel.<CreateUsersResponse>builder()
                  .data(createUserResponse)

                  .code(HttpStatus.CREATED.toString())
                  .message(HttpStatus.CREATED.name())
                  .build();
          return responseModel;


      }
      catch (BeautifulPlacesException e){
          log.error(e.getMessage(),e);
          var responseModel=ResponseModel.<CreateUsersResponse>builder()
                  .data(null)
                  .error(true)

                  .code(e.getCode())
                  .message(e.getMessage())
                  .build();
          return responseModel;


      }

      catch (Exception e){
          log.error(e.getMessage(),e);

          var responseModel=ResponseModel.<CreateUsersResponse>builder()
                  .data(null)
                  .error(true)
                  .code(HttpStatus.INTERNAL_SERVER_ERROR.toString())
                  .message(e.getLocalizedMessage())
                  .build();
          return responseModel;




      }



    }

    @Override
    @Transactional
    public ResponseModel<CreateUsersResponse> confirm(String token) {
        try {
            var confirmToken = confirmTokenService.getByToken(token);
            var users =usersService.findByEmail(confirmToken.getEmail());
            users.setEnabled(true);

            var usersResponse = new CreateUsersResponse((users.getId()));
            confirmTokenRepository.delete(confirmToken);
            var responseModel = ResponseModel.<CreateUsersResponse>builder()
                    .data(usersResponse)
                    .code(HttpStatus.OK.toString())
                    .message(HttpStatus.OK.name())
                    .build();
            return responseModel;

        } catch (BeautifulPlacesException ex) {
            log.error(ex.getMessage(), ex);
            var responseModel = ResponseModel.<CreateUsersResponse>builder()
                    .data(null)
                    .error(true)
                    .code(ex.getCode())
                    .message(ex.getMessage())
                    .build();
            return responseModel;
        }
        catch (Exception ex){
            var responseModel = ResponseModel.<CreateUsersResponse>builder()
                    .data(null)
                    .error(true)
                    .code(HttpStatus.INTERNAL_SERVER_ERROR.toString())
                    .message(HttpStatus.INTERNAL_SERVER_ERROR.name())
                    .build();
            return responseModel;
        }
    }

    @Override
    public ResponseModel<LoginResponse> login(LoginRequest loginRequest) {
        try{
            UsernamePasswordAuthenticationToken authenticationToken=
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),loginRequest.getPassword());
            Authentication authentication=authenticationManager.authenticate(authenticationToken);
            UserDetails userDetails= (UserDetails) authentication.getPrincipal();
            var accesToken=jwtService.getToken((Users) userDetails);
            var loginResponse=LoginResponse.loginResponseWithAccesToken(accesToken);
            return ResponseModel.<LoginResponse>builder()
                    .data(loginResponse)
                    .message(HttpStatus.OK.name())
                    .code(HttpStatus.OK.toString())
                    .build();


        }
        catch (BeautifulPlacesException e){
            var responseModel = ResponseModel.<LoginResponse>builder()
                    .data(new LoginResponse())
                    .error(true)
                    .code(HttpStatus.BAD_REQUEST.toString())
                    .message(e.getMessage())
                    .build();
            return responseModel;


        }
        catch (Exception e){
            var responseModel = ResponseModel.<LoginResponse>builder()
                    .data(new LoginResponse())
                    .error(true)
                    .code(HttpStatus.INTERNAL_SERVER_ERROR.toString())
                    .message(HttpStatus.INTERNAL_SERVER_ERROR.name())
                    .build();
            return responseModel;


        }

    }

    @Override
    public ResponseModel<String> forgotPassword(LoginRequest loginRequest) {
        try{
            String email= loginRequest.getEmail();

           // if(!isEnabledUser(email))throw new BeautifulPlacesException("There is no active user by this "+email+" email",HttpStatus.NOT_FOUND.toString());

           String code= generateRandomCode(VERIFY_CODE);

           validateEnabledUser(email);

           Optional<Users> users=usersRepository.findByEmailAndEnabled(email);

           sendConfirmCode(users.get(),code);

           return ResponseModel.<String>builder()
                   .data(code)
                   .message(HttpStatus.OK.name())
                   .code(HttpStatus.OK.toString())

                   .build();


        }
        catch (BeautifulPlacesException e){

            var responseModel = ResponseModel.<String>builder()

                    .error(true)
                    .code(HttpStatus.BAD_REQUEST.toString())
                    .message(e.getMessage())
                    .build();
            return responseModel;

        }
        catch (Exception e){
            var responseModel = ResponseModel.<String>builder()

                    .error(true)
                    .code(HttpStatus.INTERNAL_SERVER_ERROR.toString())
                    .message(HttpStatus.INTERNAL_SERVER_ERROR.name())
                    .build();
            return responseModel;



        }


    }

    @Override
    public ResponseModel<CreateUsersResponse> updateUsers(UsersRequestforUpdate usersRequestforUpdate) {

            try{
                String email=usersRequestforUpdate.getEmail();
                validateEnabledUser(email);



                var users = modelMapper.map(usersRequestforUpdate, Users.class);



                Optional<Users> realUser=usersRepository.findByEmailAndEnabled(email);
                Users savedUser=modelMapper.map(realUser, Users.class);

                Long id =realUser.get().getId();

                if(users.getEmail()!=realUser.get().getEmail()&&users.getEmail()!=null){
                    savedUser.setEmail(users.getEmail());
                }
                if(users.getPassword()!=realUser.get().getPassword()&&users.getPassword()!=null){
                    savedUser.setPassword(passwordEncoder.encode(users.getPassword()));
                }
                if(users.getName()!=realUser.get().getName()&& users.getName()!=null){
                    savedUser.setName(users.getName());
                }
                if(users.getSurname()!=realUser.get().getSurname() && users.getSurname()!=null){
                    savedUser.setSurname(users.getSurname());
                }

                usersRepository.save(savedUser);


                CreateUsersResponse usersResponse=new CreateUsersResponse(id);

                return ResponseModel.<CreateUsersResponse>builder()
                        .data(usersResponse)
                        .message(HttpStatus.OK.name())
                        .code(HttpStatus.OK.toString())

                        .build();


            }
            catch (BeautifulPlacesException e){

                var responseModel = ResponseModel.<CreateUsersResponse>builder()

                        .error(true)
                        .code(HttpStatus.BAD_REQUEST.toString())
                        .message(e.getMessage())
                        .build();
                return responseModel;

            }
            catch (Exception e){
                var responseModel = ResponseModel.<CreateUsersResponse>builder()

                        .error(true)
                        .code(HttpStatus.INTERNAL_SERVER_ERROR.toString())
                        .message(HttpStatus.INTERNAL_SERVER_ERROR.name())
                        .build();
                return responseModel;



            }




    }

    private static String generateRandomCode(int length) {
        Random random = new Random();
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            sb.append(random.nextInt(10));
        }
        return sb.toString();
    }



    private void validateUser(UsersRequest usersRequest){
        String email=usersRequest.getEmail();
        if(isExistsUser(email)){
            throw new BeautifulPlacesException("User exists by this email "+email, HttpStatus.BAD_REQUEST.toString());

        }
    }
    private void validateEnabledUser(String email){

        if(!isEnabledUser(email)){
            throw new BeautifulPlacesException(email+" wasn't enabled eamil" , HttpStatus.BAD_REQUEST.toString());

        }
    }

    private boolean isExistsUser(String email){
        return usersRepository.findByEmail(email).isPresent();
    }
    private boolean isEnabledUser(String email){
        return usersRepository.findByEmailAndEnabled(email).isPresent();
    }


    @Transactional
    @Async
    protected void sendConfirmMail(Users users) throws BeautifulPlacesException, UnsupportedEncodingException, MessagingException {

       try {
           var confirmToken = new ConfirmToken(users);

           var savedConfirmToken = confirmTokenRepository.save(confirmToken);

           var message = javaMailSender.createMimeMessage();

           var helper = new MimeMessageHelper(message);
           helper.setFrom(new InternetAddress("BeautifulPlaces@gmail.com", "BeautifulBlaces", "utf-8"));
           helper.setTo(confirmToken.getEmail());
           helper.setSubject("Confirmation Email");
           helper.setText(getConfirmMessage(users, savedConfirmToken), true);

           javaMailSender.send(message);

       }
       catch (BeautifulPlacesException e){


           e.printStackTrace();
       }

    }
    @Transactional
    @Async
    protected void sendConfirmCode(Users users,String vericyCode) throws BeautifulPlacesException, UnsupportedEncodingException, MessagingException {

        try {


            String email=users.getEmail();

            var message = javaMailSender.createMimeMessage();

            var helper = new MimeMessageHelper(message);
            helper.setFrom(new InternetAddress("BeautifulPlaces@gmail.com", "BeautifulPlaces", "utf-8"));
            helper.setTo(email);
            helper.setSubject("Confirmation Email");
            helper.setText(vericyCode, true);

            javaMailSender.send(message);

        }
        catch (BeautifulPlacesException e){


            e.printStackTrace();
        }

    }

    private String getConfirmMessage(Users users,ConfirmToken confirmToken){
        String link=appHost+"/api/v1/auth/confirm-mail/"+confirmToken.getToken();
        String message="<html>\n" +
                "<body>\n" +
                "  <h3>Welcome Dear "+users.getName().concat(" " +users.getSurname())+"</h3>\n" +
                "  <div>Please click <a href='" +link+"'>here</a> and confirm your email address </div>\n" +
                "</body>\n" +
                "\n" +
                "</html>";
        return message;

    }


}
