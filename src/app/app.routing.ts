import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './components/pages/form.component';
import { FoodlogComponent } from './components/pages/foodlog.component';

const appRoutes: Routes = [
	{
		path: 'foodlog',
		component: FoodlogComponent
	},

	{
		path: 'form',
		component: FormComponent
	}	
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
