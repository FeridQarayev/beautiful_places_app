package az.beautifulplaces.beans;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
public  class Bean {
    @org.springframework.context.annotation.Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }


}
