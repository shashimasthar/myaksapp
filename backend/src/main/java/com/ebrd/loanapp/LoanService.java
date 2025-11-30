package com.ebrd.loanapp;

import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import java.util.List;

@Slf4j
@Service
public class LoanService {

    private final LoanRepository repository;

    public LoanService(LoanRepository repository) {
        this.repository = repository;
    }

    public LoanRequest applyForLoan(LoanRequest request) {
        log.info("Processing loan application for: {}", request.getApplicantName());
        double emi = calculateEmi(request.getAmount(), request.getInterestRate(), request.getTenureMonths());
        request.setMonthlyEmi(emi);
        request.setStatus("APPROVED"); // Auto-approve for demo
        log.info("Loan approved with EMI: {}", emi);
        return repository.save(request);
    }

    public List<LoanRequest> getAllLoans() {
        log.debug("Fetching all loan requests");
        return repository.findAll();
    }

    public double calculateEmi(double principal, double annualRate, int months) {
        log.debug("Calculating EMI for Principal: {}, Rate: {}, Months: {}", principal, annualRate, months);
        double monthlyRate = annualRate / 12 / 100;
        double emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
               (Math.pow(1 + monthlyRate, months) - 1);
        return Math.round(emi * 100.0) / 100.0; // Round to 2 decimal places
    }
}
