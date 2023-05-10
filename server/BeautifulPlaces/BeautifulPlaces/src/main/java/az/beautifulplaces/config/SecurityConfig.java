package az.beautifulplaces.config;




import az.beautifulplaces.jwt.JwtFilter;

import lombok.RequiredArgsConstructor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;


import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;



@Configuration
@EnableWebSecurity
@RequiredArgsConstructor

public class SecurityConfig  {
    private final UserDetailsService usersDetailService;
    private final JwtFilter jwtFilter;


    @Bean
   public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.csrf().disable();
    http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);


    http .authorizeHttpRequests().requestMatchers("/api/v1/auth/sign-in","/api/v1/auth/sign-up","/api/v1/auth/confirm-mail/{token}").permitAll()


                .requestMatchers("/api/v1/auth/updateUser").hasAnyAuthority("ADMIN")
                .requestMatchers("/api/v1/auth/sa").hasAnyAuthority("USER")
            .requestMatchers("/api/v1/auth/forgotPassword").hasAnyAuthority("USER")


                .and().httpBasic();
    http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
  //

    return http.build();
}

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http, PasswordEncoder passwordEncoder) throws Exception {
   return http.getSharedObject(AuthenticationManagerBuilder.class)
            .userDetailsService(usersDetailService)
            .passwordEncoder(passwordEncoder)
           .and().build();


    }

    @Bean
    public static PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


}
