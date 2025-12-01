package com.ebrd.loanapp;

import lombok.Data;

@Data
public class EmiCalculationRequest {
    private double amount;
    private double rate;
    private int months;
}
