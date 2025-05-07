import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private selectedBannerId: number | null = null;

  setSelectedProductId(id: number) {
    this.selectedBannerId = id;
  }

  getSelectedProductId(): number | null {
    return this.selectedBannerId;
  }
}
