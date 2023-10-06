import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DemoComponent } from './demo/demo.component';
import { TskComponent } from './mdl/tsk.component';
import { FormsComponent } from './forms/forms.component'
import { ReactiveFormsModule } from '@angular/forms';
import { TodoProComponent } from './todo-pro/todo-pro.component';
import { TempdrivComponent } from './tempdriv/tempdriv.component';
import { Routes, RouterModule } from '@angular/router';
import { RoutesComponent } from './routes/routes.component';
import { PageErrComponent } from './page-err/page-err.component';
import { HomeComponent } from './home/home.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MsgPageComponent } from './msg-page/msg-page.component';
import { TestingServicesService } from './services/testing-services.service';
import { CmpAComponent } from './service-examp/cmp-a/cmp-a.component';
import { CmpBComponent } from './service-examp/cmp-b/cmp-b.component';
import { BoardComponent } from './service-examp/board/board.component';
import { DetailBComponent } from './cars-details/detail-b/detail-b.component';
import { EmpRecordsComponent } from './emp-records/emp-records.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { PipesExampComponent } from './pipes-examp/pipes-examp.component';
import { CustPipePipe } from './pipes/cust-pipe.pipe';
import { DatePipe } from '@angular/common';
import { CustPowPipe } from './pipes/cust-pow.pipe';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ChildCompComponent } from './lifecycle-hooks/child-comp/child-comp.component';
import { SibCompComponent } from './lifecycle-hooks/sib-comp/sib-comp.component';
import { TempCompComponent } from './lifecycle-hooks/temp-comp/temp-comp.component';
import { ApiCallComponent } from './api/api-call/api-call.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExampleInterceptorInterceptor } from './interceptor/example-interceptor.interceptor';
import { SortUserPipe } from './pipes/sort-user.pipe';
import { NgxPaginationModule } from 'ngx-pagination'
import { GraphsChartsComponent } from './graphs-charts/graphs-charts.component';
import { NgChartsModule } from 'ng2-charts';
import { ParentCompComponent } from './data-sharing/parent-comp/parent-comp.component';
import { SiblingCompComponent } from './data-sharing/sibling-comp/sibling-comp.component';
import { ChildrenCompComponent } from "./data-sharing/child-comp/child-comp.component";
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceService } from './auth/auth-service.service';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './dashboard/user/user.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { CalComponent } from './Rev/cal/cal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { WebsocketComponent } from './websocket/websocket.component'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { StoreModule } from '@ngrx/store';
import { NgrxCompComponent } from './ngrx-comp/ngrx-comp.component';
import { CounterButtonComponent } from './ngrx-comp/counter-button/counter-button.component';
import { CounterDisplayComponent } from './ngrx-comp/counter-display/counter-display.component';
import { FirebaseApiComponent } from './firebase-api/firebase-api.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
// const config: SocketIoConfig = { url: 'http://localhost:4200', options: {} };
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent, BindingComponent, DemoComponent, TskComponent, FormsComponent,
    TodoProComponent, TempdrivComponent, RoutesComponent, PageErrComponent, HomeComponent,
    CarsListComponent, CarsDetailsComponent, SignupFormComponent, MsgPageComponent, CmpAComponent,
    CmpBComponent, BoardComponent, DetailBComponent, EmpRecordsComponent, EmpDetailComponent, PipesExampComponent,
    CustPipePipe, CustPowPipe, LifecycleHooksComponent, ChildCompComponent, SibCompComponent,
    TempCompComponent, ApiCallComponent, SortUserPipe, GraphsChartsComponent, ParentCompComponent,
    SiblingCompComponent, ChildrenCompComponent, LoginComponent, UserComponent, AdminComponent,
    CalComponent,
    WebsocketComponent,
    DynamicFormComponent,
    NgrxCompComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    FirebaseApiComponent,
  ],
  imports: [
    InputTextModule,
    BrowserModule, AppRoutingModule, FormsModule,
    ReactiveFormsModule, HttpClientModule, NgxPaginationModule,
    NgChartsModule, NgbTooltipModule, BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatDividerModule, MatTableModule, Ng2SearchPipeModule,
    MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatRadioModule,
    MatButtonToggleModule, MatCheckboxModule, MatChipsModule,
    MatMenuModule, MatBadgeModule, MatDialogModule,
    MatTooltipModule, MatSlideToggleModule, MatSidenavModule,
    MatSnackBarModule, MatSliderModule, MatSelectModule, StoreModule.forRoot({}, {}),
    // SocketIoModule.forRoot(config)
    CardModule, PasswordModule, ButtonModule, TableModule
  ],
  exports: [RouterModule],
  providers: [TestingServicesService, DatePipe, CustPipePipe, SortUserPipe,
    { provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptorInterceptor, multi: true },
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
