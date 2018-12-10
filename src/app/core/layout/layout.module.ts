import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftsidenavComponent } from './components/leftsidenav/leftsidenav.component';
import { RightsidenavComponent } from './components/rightsidenav/rightsidenav.component';
import { ModulemenuComponent } from './components/modulemenu/modulemenu.component';

@NgModule({
	declarations: [ToolbarComponent, FooterComponent, LeftsidenavComponent, RightsidenavComponent, ModulemenuComponent],
	imports: [
		CommonModule
	],
	exports: [ToolbarComponent, FooterComponent, LeftsidenavComponent, RightsidenavComponent, ModulemenuComponent]
})
export class LayoutModule { }
