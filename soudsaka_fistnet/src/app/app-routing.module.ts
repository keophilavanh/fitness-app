import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',redirectTo: 'login', pathMatch: 'full'
   
 },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'table-view',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
 
  {
    path: 'product-info',
    loadChildren: () => import('./product-info/product-info.module').then( m => m.ProductInfoPageModule)
  },

  {
    path: 'signature-pad',
    loadChildren: () => import('./signature-pad/signature-pad.module').then( m => m.SignaturePadPageModule)
  },
 
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'item-list',
    loadChildren: () => import('./item-list/item-list.module').then( m => m.ItemListPageModule)
  },
  {
    path: 'invice-bill',
    loadChildren: () => import('./invice-bill/invice-bill.module').then( m => m.InviceBillPageModule)
  },
  {
    path: 'item-info',
    loadChildren: () => import('./item-info/item-info.module').then( m => m.ItemInfoPageModule)
  },
  {
    path: 'printer',
    loadChildren: () => import('./printer/printer.module').then( m => m.PrinterPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'report-view',
    loadChildren: () => import('./report-view/report-view.module').then( m => m.ReportViewPageModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  },
  {
    path: 'table-manage',
    loadChildren: () => import('./table-manage/table-manage.module').then( m => m.TableManagePageModule)
  },
  {
    path: 'product-manage',
    loadChildren: () => import('./product-manage/product-manage.module').then( m => m.ProductManagePageModule)
  },
  {
    path: 'table-info',
    loadChildren: () => import('./table-info/table-info.module').then( m => m.TableInfoPageModule)
  },
  {
    path: 'table-add',
    loadChildren: () => import('./table-add/table-add.module').then( m => m.TableAddPageModule)
  },
  {
    path: 'category-manage',
    loadChildren: () => import('./category-manage/category-manage.module').then( m => m.CategoryManagePageModule)
  },
  {
    path: 'category-add',
    loadChildren: () => import('./category-add/category-add.module').then( m => m.CategoryAddPageModule)
  },
  {
    path: 'category-info',
    loadChildren: () => import('./category-info/category-info.module').then( m => m.CategoryInfoPageModule)
  },
  {
    path: 'product-add',
    loadChildren: () => import('./product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'option',
    loadChildren: () => import('./option/option.module').then( m => m.OptionPageModule)
  },
  {
    path: 'report-select',
    loadChildren: () => import('./report-select/report-select.module').then( m => m.ReportSelectPageModule)
  },
  {
    path: 'user-manage',
    loadChildren: () => import('./user-manage/user-manage.module').then( m => m.UserManagePageModule)
  },
  {
    path: 'user-add',
    loadChildren: () => import('./user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./user-info/user-info.module').then( m => m.UserInfoPageModule)
  },  {
    path: 'manage',
    loadChildren: () => import('./manage/manage.module').then( m => m.ManagePageModule)
  },
  {
    path: 'packet-manage',
    loadChildren: () => import('./packet-manage/packet-manage.module').then( m => m.PacketManagePageModule)
  },
  {
    path: 'packet-add',
    loadChildren: () => import('./packet-add/packet-add.module').then( m => m.PacketAddPageModule)
  },
  {
    path: 'packet-info',
    loadChildren: () => import('./packet-info/packet-info.module').then( m => m.PacketInfoPageModule)
  },
  {
    path: 'menber-manage',
    loadChildren: () => import('./menber-manage/menber-manage.module').then( m => m.MenberManagePageModule)
  },
  {
    path: 'menber-add',
    loadChildren: () => import('./menber-add/menber-add.module').then( m => m.MenberAddPageModule)
  },
  {
    path: 'menber-update',
    loadChildren: () => import('./menber-update/menber-update.module').then( m => m.MenberUpdatePageModule)
  },
  {
    path: 'inout',
    loadChildren: () => import('./inout/inout.module').then( m => m.InoutPageModule)
  },
  {
    path: 'print-card',
    loadChildren: () => import('./print-card/print-card.module').then( m => m.PrintCardPageModule)
  },






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
