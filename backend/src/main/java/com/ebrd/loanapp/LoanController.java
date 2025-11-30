package com.ebrd.loanapp;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/loans")
@CrossOrigin(origins = "*") // In production, replace * with specific frontend domain
public class LoanController {

    private final LoanService service;

    public LoanController(LoanService service) {
        this.service = service;
    }

    @PostMapping
    public LoanRequest apply(@Valid @RequestBody LoanRequest request) {
        log.info("Received loan application request");
        return service.applyForLoan(request);
    }

    @GetMapping
    public List<LoanRequest> getAll() {
        return service.getAllLoans();
    }

    @PostMapping("/calculate-emi")
    public Map<String, Double> calculateEmi(@RequestBody Map<String, Double> request) {
        double principal = request.get("amount");
        double rate = request.get("rate");
        int months = request.get("months").intValue();
        
        log.info("Received EMI calculation request");
        double emi = service.calculateEmi(principal, rate, months);
        return Map.of("emi", emi);
    }
}
