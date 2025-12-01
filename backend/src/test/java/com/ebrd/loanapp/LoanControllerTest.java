package com.ebrd.loanapp;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(LoanController.class)
public class LoanControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LoanService service;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testApplyForLoan() throws Exception {
        LoanApplicationDto dto = new LoanApplicationDto();
        dto.setApplicantName("Jane Doe");
        dto.setAmount(5000.0);
        dto.setInterestRate(5.0);
        dto.setTenureMonths(12);

        LoanRequest mockResponse = new LoanRequest();
        mockResponse.setId("123");
        mockResponse.setStatus("APPROVED");

        when(service.applyForLoan(any(LoanRequest.class))).thenReturn(mockResponse);

        mockMvc.perform(post("/api/loans")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("APPROVED"));
    }

    @Test
    public void testGetAllLoans() throws Exception {
        when(service.getAllLoans()).thenReturn(Collections.emptyList());

        mockMvc.perform(get("/api/loans"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }

    @Test
    public void testCalculateEmi() throws Exception {
        EmiCalculationRequest request = new EmiCalculationRequest();
        request.setAmount(10000);
        request.setRate(5.5);
        request.setMonths(12);

        when(service.calculateEmi(10000, 5.5, 12)).thenReturn(858.36);

        mockMvc.perform(post("/api/loans/calculate-emi")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.emi").value(858.36));
    }
}
