import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/compat/firestore';
import { environment } from '../enviroments/enviroment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GlobalComponent } from './features/info/components/global/global.component';
import { BaseChartDirective  } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'primeng/chart';
import { MenuComponent } from './shared/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BaseChartDirective,
    HighchartsChartModule,
    ChartModule,
    MenubarModule
    
  ],
  providers: [
    { provide: SETTINGS, useValue: { merge: true, cacheSizeBytes: 1048576 } },
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({"projectId":"electronics-project-5bd81","appId":"1:672542301796:web:7b8b459f13063c7250c971","databaseURL":"https://electronics-project-5bd81-default-rtdb.firebaseio.com","storageBucket":"electronics-project-5bd81.appspot.com","apiKey":"AIzaSyBJmvWFglhemmXN6cPE_JSorFi7bXWg1zM","authDomain":"electronics-project-5bd81.firebaseapp.com","messagingSenderId":"672542301796"})),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
