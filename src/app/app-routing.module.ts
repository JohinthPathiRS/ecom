import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { Store3Component } from './store3/store3.component';
import { Store4Component } from './store4/store4.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { Store1Component } from './store1/store1.component';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { MotorolaComponent } from './motorola/motorola.component';
import { ViewportScroller } from '@angular/common';
import { InfinixComponent } from './infinix/infinix.component';
import { RealmeComponent } from './realme/realme.component';
import { SamsungComponent } from './samsung/samsung.component';
import { VivoComponent } from './vivo/vivo.component';
import { NothingComponent } from './nothing/nothing.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { HpComponent } from './hp/hp.component';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { AsusComponent } from './asus/asus.component';
import { AcerComponent } from './acer/acer.component';
import { MacComponent } from './mac/mac.component';
import { Store2Component } from './store2/store2.component';
import { RealmewatchComponent } from './realmewatch/realmewatch.component'; 
import { ApplewatchComponent } from './applewatch/applewatch.component';
import { GalaxywatchComponent } from './galaxywatch/galaxywatch.component';
import { NoiseComponent } from './noise/noise.component';
import { FireboltComponent } from './firebolt/firebolt.component';
import { BoatComponent } from './boat/boat.component';
import { AdidasComponent } from './adidas/adidas.component';
import { ConverseComponent } from './converse/converse.component';
import { PumaComponent } from './puma/puma.component';
import { ReebokComponent } from './reebok/reebok.component';
import { NewbalanceComponent } from './newbalance/newbalance.component';
import { NikeComponent } from './nike/nike.component';
import { AddSamComponent } from './add-sam/add-sam.component';
import { AddZebComponent } from './add-zeb/add-zeb.component';
import { AddIntelComponent } from './add-intel/add-intel.component';
import { Shop2Component } from './shop2/shop2.component';
import { Shop3Component } from './shop3/shop3.component';
import { Shop4Component } from './shop4/shop4.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PaymentComponent } from './payment/payment.component';
import { AllComponent } from './all/all.component';



const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent },
  { path: 'store1', component: Store1Component },

  { path: 'store2', component: Store2Component },
  { path: 'store3', component: Store3Component },
  { path: 'store4', component: Store4Component },

  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'motorola', component: MotorolaComponent },
  { path: 'infinix', component: InfinixComponent },
  { path: 'samsung', component: SamsungComponent },
  { path: 'realme', component: RealmeComponent },
  { path: 'vivo', component: VivoComponent },
  { path: 'nothing', component: NothingComponent },
  { path: 'hp', component: HpComponent },
  { path: 'lenovo', component: LenovoComponent },
  { path: 'galaxy', component: GalaxyComponent },
  { path: 'mac', component: MacComponent },
  { path: 'acer', component: AcerComponent },
  { path: 'asus', component: AsusComponent },
  { path: 'product', component: ProductComponent },
  {path:'realmewatch',component:RealmewatchComponent},
  {path:'applewatch',component:ApplewatchComponent},
  {path:'galaxywatch',component:GalaxywatchComponent},
  {path:'boat',component:BoatComponent},
  {path:'noise',component:NoiseComponent},
  {path:'firebolt',component:FireboltComponent},
  {path:'nike',component:NikeComponent},
  {path:'converse',component:ConverseComponent},
  {path:'adidas',component:AdidasComponent},
  {path:'newbalance',component:NewbalanceComponent},
  {path:'rebook',component:ReebokComponent},
  {path:'puma',component:PumaComponent},
  {path:'add-sam',component:AddSamComponent},
  {path:'add-zeb',component:AddZebComponent},

  {path:'add-intel',component:AddIntelComponent},
  {path:'shop2',component:Shop2Component},
  {path:'shop3',component:Shop3Component},
  {path:'shop4',component:Shop4Component},
  {path:'search-results',component:SearchResultsComponent},
  {path:'pay',component:PaymentComponent},
  {path:'all',component:AllComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}