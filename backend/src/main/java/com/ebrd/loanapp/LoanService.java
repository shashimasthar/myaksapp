package com.ebrd.loanapp;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LoanService {

    private final LoanRepository repository;

    public LoanService(LoanRepository repository) {
        this.repository = repository;
    }

    public LoanRequest applyForLoan(LoanRequest request) {
        double emi = calculateEmi(request.getAmount(), request.getInterestRate(), request.getTenureMonths());
        request.setMonthlyEmi(emi);
        request.setStatus("APPROVED"); // Auto-approve for demo
        return repository.save(request);
    }

    public List<LoanRequest> getAllLoans() {
        return repository.findAll();
    }

    public double calculateEmi(double principal, double annualRate, int months) {
        double monthlyRate = annualRate / 12 / 100;
        return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
               (Math.pow(1 + monthlyRate, months) - 1);
    }
}
