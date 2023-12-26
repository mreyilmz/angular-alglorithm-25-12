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

  inputPrimeNumber: number = 0;
  primeNumberResult: string = '';

  inputPalindrom: string = '';
  palindromResult: string = '';

  inputArmstrong: number = 0;
  armstrongResult: boolean = true;

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

  isPrime() {
    if (this.inputPrimeNumber <= 1) this.primeNumberResult = 'Not Prime';

    if (this.inputPrimeNumber === 2) this.primeNumberResult = 'Prime';

    for (let i = 3; i <= Math.sqrt(this.inputPrimeNumber); i++) {
      if (this.inputPrimeNumber % i === 0) this.primeNumberResult = 'Not Prime';
      else this.primeNumberResult = 'Prime';
    }
  }

  isPalindrom() {
    let reversedString = this.inputPalindrom.split('').reverse().join('');
    if (reversedString === this.inputPalindrom)
      this.palindromResult = 'İt is a palindrom';
    else this.palindromResult = 'İt is NOT a palindrom';
  }

  isArmstrong() {
    let digits = this.inputArmstrong.toString().split('');
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
      sum += Math.pow(parseInt(digits[i]), digits.length);
    }

    return (this.armstrongResult = sum === this.inputArmstrong);
  }
}
