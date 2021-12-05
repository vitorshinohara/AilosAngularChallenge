import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { HeaderProfileIconsComponent } from './header/components/header-profile-icons/header-profile-icons.component';



@NgModule({
  declarations: [
    HeaderProfileIconsComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class LayoutModule { }
