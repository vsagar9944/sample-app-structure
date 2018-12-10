import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './component/core.component';
import { MainComponent } from './components/main/main.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
	declarations: [CoreComponent, MainComponent],
	imports: [
		BrowserModule,
		CoreRoutingModule,
		LayoutModule
	],
	providers: [],
	bootstrap: [CoreComponent]
})
export class CoreModule { }
