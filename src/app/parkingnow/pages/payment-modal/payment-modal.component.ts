import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css'],
})
export class PaymentModalComponent {
  price: string = 'S/ 50.00';
  transactionComplete: boolean = false;
  selectedPaymentMethod: string = '';
  currentLanguage: string = 'es';

  constructor(
    public dialogRef: MatDialogRef<PaymentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translate: TranslateService
  ) {
    // Asegúrate de que 'data' no sea undefined antes de usarlo
    this.price = data?.totalAmount || 'S/ 50.00';
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage); // Establecer idioma por defecto
  }

  selectPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
    switch (method) {
      case 'Visa':
        this.price = 'S/ 50.00';
        break;
      case 'Yape':
        this.price = 'S/ 45.00';
        break;
      case 'BCP':
        this.price = 'S/ 55.00';
        break;
      default:
        this.price = 'S/ 50.00';
    }
  }

  completeTransaction() {
    if (this.selectedPaymentMethod && this.isFormValid()) {
      this.transactionComplete = true;
      // Uso de translate para mostrar el mensaje adecuado
      alert(this.translate.instant('PAYMENT.TRANSACTION_COMPLETE'));
      this.closeModal();
    } else {
      // Asegúrate de que el mensaje de error sea claro
      alert(this.translate.instant('PAYMENT.COMPLETE_FORM'));
    }
  }

  closeModal() {
    this.dialogRef.close('success'); // Devuelve un resultado exitoso al cerrar el modal
  }

  isFormValid(): boolean {
    // Puedes agregar más validaciones aquí si es necesario
    return this.selectedPaymentMethod !== '';
  }

  switchLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang); // Cambiar el idioma al seleccionado
  }
}
