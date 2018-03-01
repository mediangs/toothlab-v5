import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
// import 'd3';
// import 'nvd3';
import {NvD3Module} from 'ng2-nvd3';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatMenuModule, MatOptionModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {Angulartics2Module} from 'angulartics2';
import {ColorPickerModule} from 'ngx-color-picker';

import {PeopleService} from './services/people.service';
import {PublicationsService} from './services/publications.service';
import {SpecimenService} from './services/specimen.service';
import {ChartService} from './services/chart.service';
import {SectionContourService} from './services/section-contour.service';

import {HomeComponent} from './home/home.component';
import {PeopleComponent} from './people/people.component';
import {PublicationsComponent} from './publications/publications.component';
import {SpecimenListComponent} from './specimen-list/specimen-list.component';
import {SpecimenDetailComponent} from './specimen-detail/specimen-detail.component';
import {SpecimenChartComponent} from './specimen-chart/specimen-chart.component';
import {DialogViewsettingComponent} from './dialog-viewsetting/dialog-viewsetting.component';
import {DialogSectionInfoComponent} from './dialog-section-info/dialog-section-info.component';
import {DialogHelpComponent} from './dialog-help/dialog-help.component';
import {ViewConfigComponent} from './view-config/view-config.component';
import {SectionInfoboxComponent} from './section-infobox/section-infobox.component';

import { AppComponent } from './app.component';
import {KeysPipe} from './keys.pipe';
import {DataService} from './services/data.service';
import {Routing} from './app.routes';

@NgModule({
  declarations: [
    KeysPipe,
    AppComponent,
    HomeComponent,
    PeopleComponent,
    PublicationsComponent,
    SpecimenListComponent,
    SpecimenDetailComponent,
    SpecimenChartComponent,
    DialogViewsettingComponent,
    DialogSectionInfoComponent,
    DialogHelpComponent,
    SectionInfoboxComponent,
    ViewConfigComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSidenavModule,
    MatTooltipModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ColorPickerModule,
    NvD3Module,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  providers: [
    PeopleService,
    PublicationsService,
    SpecimenService,
    ChartService,
    DataService,
    SectionContourService,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [
    DialogViewsettingComponent,
    DialogSectionInfoComponent,
    DialogHelpComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
