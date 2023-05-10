package az.beautifulplaces.schedul;

import az.beautifulplaces.repo.ConfirmTokenRepository;
import az.beautifulplaces.repo.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;

import static az.beautifulplaces.constant.Times.SCHEDULE_DELETE_TOKEN_TIME;
@Component
@RequiredArgsConstructor
public class ConfirmTokenSchedul {

    private final ConfirmTokenRepository confirmTokenRepository;


    @Scheduled(fixedDelay = SCHEDULE_DELETE_TOKEN_TIME)
    public void deleteExpiredTokens(){

        var tokenList=confirmTokenRepository.findAll();
        tokenList.stream().forEach(token->{
            if(token.getExpiredAt().before(new Date())){
                confirmTokenRepository.delete(token);

            }
        });



    }
}
