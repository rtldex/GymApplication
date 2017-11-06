import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { UpdateSubscriptionComponent } from './update-subscription/update-subscription.component';
import { UpdateWorkoutComponent } from './update-workout/update-workout.component';
import { ListWorkoutComponent } from './list-workout/list-workout.component';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { ListSubscriptionComponent } from './list-subscription/list-subscription.component';
import { RoomPageComponent } from './room-page/room-page.component';;

const routes: Routes = [
    //{ path: '', redirectTo: '/createworkout', pathMatch: 'full' },
    { path: 'createworkout', component: CreateWorkoutComponent },
    { path: 'updatesubscription', component: UpdateSubscriptionComponent },
    { path: 'updateworkout', component: UpdateWorkoutComponent},
    { path: 'listworkout', component: ListWorkoutComponent},
    { path: 'createsubscription', component: CreateSubscriptionComponent },
    { path: 'listsubscription', component: ListSubscriptionComponent },
    { path: 'roompage', component: RoomPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }