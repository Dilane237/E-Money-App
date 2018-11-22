import { NgModule } from '@angular/core';

import { EmoneySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [EmoneySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [EmoneySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EmoneySharedCommonModule {}
