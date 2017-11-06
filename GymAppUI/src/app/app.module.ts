import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { UpdateSubscriptionComponent } from './update-subscription/update-subscription.component';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateWorkoutComponent,
    UpdateSubscriptionComponent,
    CreateSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
