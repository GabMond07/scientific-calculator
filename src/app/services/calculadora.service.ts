import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  evaluateExpression(expression: string): number {
    try {
      // Basic validation to prevent invalid characters
      if (!expression || /[^0-9+\-*/().^%sqrtlogsinconstan]/.test(expression)) {
        throw new Error('Expresión inválida');
      }

      // Replace mathematical functions with Math object equivalents
      expression = expression.replace(/sin/g, 'Math.sin')
                           .replace(/cos/g, 'Math.cos')
                           .replace(/tan/g, 'Math.tan')
                           .replace(/sqrt/g, 'Math.sqrt')
                           .replace(/log/g, 'Math.log10')
                           .replace(/\^/g, '**');

      // Evaluate the expression
      const result = eval(expression);

      if (!isFinite(result)) {
        throw new Error('Operación inválida (por ejemplo, división por cero)');
      }

      // Format result to avoid excessive decimals
      return parseFloat(result.toFixed(8));
    } catch (error) {
      // Assert error as Error type to access message property
      throw new Error('Error en el cálculo: ' + (error instanceof Error ? error.message : 'Desconocido'));
    }
  }

  validateInput(expression: string): boolean {
    // Check for division by zero
    if (expression.includes('/0')) return false;
    // Check for negative logarithm
    if (expression.includes('log') && expression.includes('-')) return false;
    // Additional validations can be added here
    return true;
  }
}