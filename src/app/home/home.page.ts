import { Component } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  display: string = '';
  errorMessage: string = '';

  constructor(private calculadoraService: CalculadoraService) {}

  append(value: string) {
    this.display += value;
    this.errorMessage = '';
  }

  clear() {
    this.display = '';
    this.errorMessage = '';
  }

  deleteLast() {
    this.display = this.display.slice(0, -1);
    this.errorMessage = '';
  }

  calculate() {
    try {
      if (!this.display) {
        this.errorMessage = 'No se proporcionó ninguna entrada';
        return;
      }
      if (!this.calculadoraService.validateInput(this.display)) {
        this.errorMessage = 'Entrada inválida';
        return;
      }
      const result = this.calculadoraService.evaluateExpression(this.display);
      this.display = result.toString();
      this.errorMessage = '';
    } catch (error) {
      this.errorMessage = 'error';
    }
  }
}
