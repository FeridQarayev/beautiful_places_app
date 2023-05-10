package az.beautifulplaces.controller;

import az.beautifulplaces.entitiy.Places;
import az.beautifulplaces.entitiy.Role;
import az.beautifulplaces.repo.PlacesRepository;

import az.beautifulplaces.repo.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import az.beautifulplaces.entitiy.Users;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/places")
public class PlacesController {
    private final PlacesRepository repository;
    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;

    @GetMapping("/data")

    public List<Places> getPlaces(@RequestParam String email){

       Optional<Users> users= usersRepository.findByEmail(email);
        System.out.println(users.get().getName());
        return repository.findAll();

    }
    @PostMapping("/save")
    public Users user(@RequestBody Users user){
return null;


    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        String filename = file.getOriginalFilename();

        // dosyayı sunucuda kaydet
        // ...

        return ResponseEntity.ok(filename);
    }




    //    @PostMapping("/save")
//    public Users users(@RequestBody Users users){
//        String encrypted=passwordEncoder.encode(users.getPassword());
//        users.setPassword(encrypted);
//        return usersRepository.save(users);
//    }
    @GetMapping("/list")

    public List<Users> users(){

        return usersRepository.findAll();
    }




}
