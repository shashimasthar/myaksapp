package com.ebrd.loanapp;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class LoanServiceTest {

    @Mock
    private LoanRepository repository;

    @InjectMocks
    private LoanService service;

    @Test
    public void testCalculateEmi() {
        // Principal: 10000, Rate: 5.5%, Months: 12
        // Expected EMI: ~858.36
        double emi = service.calculateEmi(10000, 5.5, 12);
        assertEquals(858.36, emi, 0.01);
    }

    @Test
    public void testApplyForLoan() {
        LoanRequest request = new LoanRequest();
        request.setApplicantName("John Doe");
        request.setAmount(10000.0);
        request.setInterestRate(5.5);
        request.setTenureMonths(12);

        when(repository.save(any(LoanRequest.class))).thenAnswer(i -> i.getArguments()[0]);

        LoanRequest result = service.applyForLoan(request);

        assertNotNull(result.getMonthlyEmi());
        assertEquals("APPROVED", result.getStatus());
        assertEquals(858.36, result.getMonthlyEmi(), 0.01);
    }
}
