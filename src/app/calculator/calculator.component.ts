import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  selectedOperation: string = 'add';
  result: number | undefined;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  performCalculation(): void {
    try {
      switch (this.selectedOperation) {
        case 'add':
          this.result = this.calculatorService.add(this.num1, this.num2);
          break;
        case 'subtract':
          this.result = this.calculatorService.subtract(this.num1, this.num2);
          break;
        case 'multiply':
          this.result = this.calculatorService.multiply(this.num1, this.num2);
          break;
        case 'divide':
          this.result = this.calculatorService.divide(this.num1, this.num2);
          break;
        default:
          throw new Error('Invalid operation');
      }
    } catch (error) {
      this.result = undefined;
    }
  }


}
