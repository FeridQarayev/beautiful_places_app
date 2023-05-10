package az.beautifulplaces.jwt;

import az.beautifulplaces.entitiy.Users;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;

@Service
public class JwtService {
    @Value("${jwt.secret-key}")
    private String SECRET_KEY;
    @Value("${jwt.expire-time}")
    private long EXPIRE_TIME;
    @Value("${jwt.issuer}")
    private String  ISSUER;
    @Value("${jwt.refresh_token.expiration}")
    private long  REFRESH_TOKEN_EXPIRATION_TIME;


    public String getToken(Users users){
        String token =Jwts.builder()
                .setSubject(users.getUsername())
                .setIssuedAt(new Date())
                .setIssuer(ISSUER)
                .setExpiration(Date.from(Instant.now().plusSeconds(EXPIRE_TIME)))
                .signWith(SignatureAlgorithm.HS512,SECRET_KEY).compact();



        return token;
    }

    public String getEmailFromToken(String token){
        Claims claims= Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token).getBody();

        return claims.getSubject();

    }

}
