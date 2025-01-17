import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ShowPredictComponent } from './pages/show-predict/show-predict.component';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';
import { UploadImagesComponent } from './pages/upload-images/upload-images.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Redirige '/' a '/inicio'
    { path: 'welcome', component: InicioComponent },
    { path: 'show_predict', component: ShowPredictComponent},
    { path: 'register_patient', component: RegisterPatientComponent},
    { path: 'upload_images', component: UploadImagesComponent}
];
