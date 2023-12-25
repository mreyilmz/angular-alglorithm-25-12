import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gunluk-algoritma-odevleri';

  factorialNumber: number = 0;
  factorialResult: number = 1;

  inputString: string = '';
  reversedString: string = '';

  aNumber: number = 0;
  numberOfDigits: number = 1;

  faktoriyelHesaplama() {
    while (this.factorialNumber !== 0) {
      this.factorialResult *= this.factorialNumber;
      this.factorialNumber--;
    }
  }
  faktoriyelReset() {
    this.factorialResult = 1;
  }

  reverseString() {
    this.reversedString = this.inputString.split('').reverse().join('');
  }

  digitCount() {
    while (true) {
      this.aNumber /= 10;
      this.numberOfDigits++;
      if (this.aNumber < 10) {
        this.aNumber = 0;
        break;
      }
    }
  }

  resetCount() {
    this.numberOfDigits = 0;
  }
}
