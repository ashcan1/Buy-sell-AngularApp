import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingsPageComponent } from './edit-listings-page/edit-listings-page.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  {path :'',redirectTo: '/listings', pathMatch: 'full'},
  { path: 'listings', component: ListingPageComponent, pathMatch: 'full'},
  { path: 'listings/:id', component: ListingDetailsPageComponent},
  { path: 'contact/:id', component: ContactPageComponent},
  { path: 'edit-listing/:id', component: EditListingsPageComponent},
  { path: 'my-listings', component: MyListingsPageComponent},
  { path: 'new-listing', component: NewListingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
