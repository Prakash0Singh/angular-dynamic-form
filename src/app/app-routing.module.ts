import { NgModule } from '@angular/core';
import { BindingComponent } from './binding/binding.component';
import { DemoComponent } from './demo/demo.component';
import { FormsComponent } from './forms/forms.component'
import { TodoProComponent } from './todo-pro/todo-pro.component';
import { TempdrivComponent } from './tempdriv/tempdriv.component';
import { Routes, RouterModule } from '@angular/router';
import { PageErrComponent } from './page-err/page-err.component';
import { HomeComponent } from './home/home.component';
import { TskComponent } from './mdl/tsk.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MsgPageComponent } from './msg-page/msg-page.component';
import { BoardComponent } from './service-examp/board/board.component';
import { DetailBComponent } from './cars-details/detail-b/detail-b.component';
import { EmpRecordsComponent } from './emp-records/emp-records.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { PipesExampComponent } from './pipes-examp/pipes-examp.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ApiCallComponent } from './api/api-call/api-call.component';
import { GraphsChartsComponent } from './graphs-charts/graphs-charts.component';
import { ParentCompComponent } from './data-sharing/parent-comp/parent-comp.component';
import { SiblingCompComponent } from './data-sharing/sibling-comp/sibling-comp.component';
import { ChildrenCompComponent } from './data-sharing/child-comp/child-comp.component';
import { LoginComponent } from './login/login.component';
import { AuthguradGuard } from './auth/authgurad.guard';
import { UserComponent } from './dashboard/user/user.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { CalComponent } from './Rev/cal/cal.component';
import { WebsocketComponent } from './websocket/websocket.component';
import { FirebaseApiComponent } from './firebase-api/firebase-api.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [{ path: 'project', component: TskComponent }], canActivate: [AuthguradGuard] },
  // {path:'',component:HomeComponent},
  { path: 'tempform', component: TempdrivComponent, },
  { path: 'reactform', component: FormsComponent },
  { path: 'todo', component: TodoProComponent },
  { path: 'directive', component: DemoComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'carlist', component: CarsListComponent },
  { path: 'car-detail', component: CarsDetailsComponent },
  { path: 'carB-detail/:id', component: DetailBComponent },
  { path: 'msg-page', component: MsgPageComponent },
  { path: 'sign-form', component: SignupFormComponent },
  { path: 'services-example', component: BoardComponent },
  { path: 'emp-rec', component: EmpRecordsComponent },
  { path: 'emp-detail', component: EmpDetailComponent },
  { path: 'pipes-example', component: PipesExampComponent },
  { path: 'lifecylce-hooks', component: LifecycleHooksComponent, canActivate: [AuthguradGuard] },
  { path: 'apiCall', component: ApiCallComponent, canActivate: [AuthguradGuard] },
  { path: 'graphs-charts', component: GraphsChartsComponent, canDeactivate: [AuthguradGuard], canActivate: [AuthguradGuard] },
  {
    path: 'parent-comp', component: ParentCompComponent, canActivateChild: [AuthguradGuard],
    children: [{ path: 'child-comp', component: ChildrenCompComponent },
    { path: 'sibling-comp', component: SiblingCompComponent }
    ], canActivate: [AuthguradGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'dashboad', component: AdminComponent, canActivate: [AuthguradGuard], canMatch: [AuthguradGuard] },
  { path: 'dashboad', component: UserComponent, canActivate: [AuthguradGuard] },
  { path: 'revision', component: CalComponent },
  { path: 'web-socket', component: WebsocketComponent },
  { path: 'api-calls', component: FirebaseApiComponent },

  { path: '**', component: PageErrComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
