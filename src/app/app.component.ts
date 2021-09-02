import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'sample-pmo';

  constructor(private translocoService: TranslocoService) {}

  setLanguage(language: 'en' | 'pt-br') {
    this.translocoService.setActiveLang(language);
  }
}
