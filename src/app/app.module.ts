import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Store1Component } from './store1/store1.component';
import { Store2Component } from './store2/store2.component';
import { Store3Component } from './store3/store3.component';
import { Store4Component } from './store4/store4.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { LoginComponent } from './login/login.component';
import { AllComponent } from './all/all.component';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { MotorolaComponent } from './motorola/motorola.component';
import { OverallComponent } from './overall/overall.component';
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
import { GalaxywatchComponent } from './galaxywatch/galaxywatch.component';
import { RealmewatchComponent } from './realmewatch/realmewatch.component'; 
import { FireboltComponent } from './firebolt/firebolt.component';
import { NoiseComponent } from './noise/noise.component';
import { BoatComponent } from './boat/boat.component';
import { ApplewatchComponent } from './applewatch/applewatch.component';
import { AdidasComponent } from './adidas/adidas.component';
import { ConverseComponent } from './converse/converse.component';
import { NikeComponent } from './nike/nike.component';
import { PumaComponent } from './puma/puma.component';
import { NewbalanceComponent } from './newbalance/newbalance.component';
import { ReebokComponent } from './reebok/reebok.component';
import { AddSamComponent } from './add-sam/add-sam.component';
import { AddIntelComponent } from './add-intel/add-intel.component';
import { AddZebComponent } from './add-zeb/add-zeb.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { Shop2Component } from './shop2/shop2.component';
import { Shop3Component } from './shop3/shop3.component';
import { Shop4Component } from './shop4/shop4.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Store1Component,
    Store2Component,
    Store3Component,
    Store4Component,
    AdvertisementComponent,
    LoginComponent,
    AllComponent,
    ProductComponent,
    CategoriesComponent,
    ContactComponent,
    MotorolaComponent,
    OverallComponent,
    InfinixComponent,
    RealmeComponent,
    SamsungComponent,
    VivoComponent,
    NothingComponent,
    MacComponent,
    AcerComponent,
    AsusComponent,
    LenovoComponent,
    GalaxyComponent,
    HpComponent,
    GalaxywatchComponent,
    FireboltComponent,
    NoiseComponent,
    RealmewatchComponent,
    BoatComponent,
    ApplewatchComponent,
    AdidasComponent,
    ConverseComponent,
    NikeComponent,
    PumaComponent,
    NewbalanceComponent,
    ReebokComponent,
    AddSamComponent,
    AddIntelComponent,
    AddZebComponent,
    ShopComponent,
    Shop2Component,
    Shop3Component,
    Shop4Component,
    CartComponent,
    SearchResultsComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    CartService,  // <-- Correct placement for CartService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
