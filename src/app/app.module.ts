import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { BodyComponent } from './body/body.component';
import { SettingComponent } from './setting/setting.component';
import { AssetsettingComponent } from './setting/assetsetting/assetsetting.component';
import { AssetfabricComponent } from './pages/asset/assetfabric/assetfabric.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpModule} from '@angular/http';
import { CommonService } from './services/common.service';



const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'asset', component: AssetfabricComponent },
  { path: 'login', component: LoginComponent },
  { path: 'assetSetting', component: AssetsettingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    BodyComponent,
    SettingComponent,
    AssetsettingComponent,
    AssetfabricComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
