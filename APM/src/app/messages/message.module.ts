import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MessageComponent],
  imports: [
  RouterModule.forChild([
    { path: 'message', component: MessageComponent}
  ]),
  SharedModule,
],
})
export class MessageModule {}
